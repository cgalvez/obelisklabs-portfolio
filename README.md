# Portfolio — Carlos Gálvez Chaves

Portfolio personal construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

---

## Flujo de trabajo

| Situación | Comando |
|---|---|
| Desarrollar / ver cambios en local | `npm run dev` |
| Publicar en producción (Hetzner) | `docker compose up -d --build` |

**Docker no hace falta para desarrollar.** Solo se usa para desplegar en el servidor.

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Cualquier cambio en `src/` se refleja automáticamente en el navegador al guardar — sin reiniciar nada.

> **Nota:** Si tu red corporativa da error de certificado SSL, usa:
> ```bash
> NODE_OPTIONS="--use-system-ca" npm run dev
> ```

---

## Personalización

Todo el contenido editable está en `src/data/`:

| Archivo | Qué contiene |
|---|---|
| `src/data/projects.ts` | Proyectos del portfolio |
| `src/data/experience.ts` | Timeline de experiencia laboral |
| `src/data/skills.ts` | Stack técnico y educación |

### Foto de perfil

Coloca tu foto en `public/profile.jpg`. Luego en `src/components/Hero.tsx` sustituye el bloque del placeholder por:

```tsx
import Image from "next/image";

// Dentro del div .relative.w-64...
<Image src="/profile.jpg" alt="Carlos Gálvez" fill className="object-cover" priority />
```

---

## Docker

### Construir y arrancar

```bash
docker compose up -d --build
```

La app queda disponible en `http://<tu-ip>:3000`.

### Parar

```bash
docker compose down
```

### Ver logs

```bash
docker compose logs -f portfolio
```

### Actualizar (nuevo despliegue)

```bash
git pull
docker compose up -d --build
```

Docker hace un build multi-stage: primero compila el proyecto (imagen `builder`) y luego copia solo el output mínimo a la imagen de producción basada en `node:20-alpine`. La imagen final pesa ~150 MB.

---

## Despliegue en Hetzner (producción)

### Requisitos previos en el servidor

- Docker Engine y Docker Compose instalados
- Un dominio apuntando a la IP del servidor

### 1. Subir el código al servidor

```bash
# Opción A — clonar el repo directamente
git clone <url-de-tu-repo> /opt/portfolio-cgc
cd /opt/portfolio-cgc

# Opción B — copiar los archivos por SCP
scp -r . user@<ip-hetzner>:/opt/portfolio-cgc
```

### 2. Arrancar el contenedor

```bash
cd /opt/portfolio-cgc
docker compose up -d --build
```

### 3. Configurar reverse proxy con Nginx

Si ya tienes Nginx en el servidor, añade un virtualhost:

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Recarga Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### 4. Certificado SSL con Certbot

```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

Certbot modifica el virtualhost automáticamente para redirigir HTTP → HTTPS.

---

## Umami Analytics (Coolify)

Umami corre en Coolify como servicio independiente en `https://stats.obelisklabs.dev`, así que puedes añadirle cualquier web futura sin tocar el portfolio.

### 1. Crear el sitio en Umami

1. Entra en `https://stats.obelisklabs.dev`
2. **Settings → Websites → Add website** con el dominio `obelisklabs.dev`
3. Copia el **Website ID**

### 2. Conectarlo al portfolio en Coolify

En el recurso del portfolio → **Environment Variables**, añade:

```
NEXT_PUBLIC_SITE_URL=https://obelisklabs.dev
NEXT_PUBLIC_UMAMI_ID=<website-id>
# Opcional: solo si Umami no está en stats.<dominio de NEXT_PUBLIC_SITE_URL>
NEXT_PUBLIC_UMAMI_URL=https://stats.obelisklabs.dev
```

Marca las tres como **Build Variable** (en versiones recientes de Coolify: *Available at Buildtime*). Las `NEXT_PUBLIC_*` se incrustan al compilar: si solo están disponibles en runtime, el script de Umami no aparece en la web.

Después pulsa **Redeploy** (cada vez que cambien estas variables hay que volver a compilar).

El script solo registra visitas en el dominio de `NEXT_PUBLIC_SITE_URL`, así que en local no se contamina la estadística.

### Eventos registrados

Aparecen en la pestaña **Events** del sitio en Umami:

| Evento | Dónde | Propiedad |
| --- | --- | --- |
| `project-click` | Tarjetas de proyecto (home y portfolio) | `project` |
| `contact-email` | Botón de email | — |
| `contact-linkedin` | Botón de LinkedIn (portfolio) | — |
| `language-switch` | Selector ES / CA | `to` |

Para trackear webs adicionales basta con añadir un sitio nuevo en Umami y repetir el paso 2 en cada proyecto.

### 5. Configurar Traefik (alternativa a Nginx)

Si ya usas Traefik en tu stack de Hetzner, actualiza `docker-compose.yml`:

```yaml
services:
  portfolio:
    build: .
    container_name: portfolio-cgc
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`tudominio.com`)"
      - "traefik.http.routers.portfolio.entrypoints=websecure"
      - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
      - "traefik.http.services.portfolio.loadbalancer.server.port=3000"
    networks:
      - traefik-public

networks:
  traefik-public:
    external: true
```

> Ajusta el nombre de la red (`traefik-public`) al que uses en tu configuración de Traefik.

---

## Estructura del proyecto

```
src/
  app/
    globals.css        # Design tokens y utilidades CSS
    layout.tsx         # Fuentes, metadata
    page.tsx           # Ensamblado de secciones
  components/
    Nav.tsx            # Barra de navegación fija
    Hero.tsx           # Sección principal
    About.tsx          # Sobre mí
    Projects.tsx       # Grid de proyectos
    Timeline.tsx       # Experiencia laboral
    TechStack.tsx      # Stack técnico
    Contact.tsx        # Sección de contacto
    Footer.tsx
  data/                # ← edita aquí el contenido
    projects.ts
    experience.ts
    skills.ts
  hooks/
    useInView.ts       # Fade-in al hacer scroll
public/
  profile.jpg          # Tu foto (añadir manualmente)
Dockerfile
docker-compose.yml
```
