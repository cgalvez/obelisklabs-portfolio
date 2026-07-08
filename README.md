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

## Umami Analytics (autoalojado)

Umami es una instancia **independiente del portfolio**: vive en su propia carpeta del servidor y puedes añadirle cualquier web futura sin tocar el portfolio.

### 1. Desplegar Umami en el servidor

```bash
mkdir -p /opt/umami
# Copia docker-compose.umami.yml y .env.umami.example del repo
cp docker-compose.umami.yml /opt/umami/docker-compose.yml
cp .env.umami.example /opt/umami/.env
```

Rellena `/opt/umami/.env` con secretos generados:

```bash
echo "UMAMI_DB_PASSWORD=$(openssl rand -hex 32)" >> /opt/umami/.env
echo "UMAMI_APP_SECRET=$(openssl rand -hex 32)"  >> /opt/umami/.env
```

Levanta Umami:

```bash
cd /opt/umami && docker compose up -d
```

### 2. Virtualhost Nginx para el subdominio

Apunta `analytics.obelisklabs.dev` a la IP del servidor y añade:

```nginx
server {
    listen 80;
    server_name analytics.obelisklabs.dev;

    location / {
        proxy_pass http://localhost:3003;
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

```bash
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d analytics.obelisklabs.dev
```

### 3. Crear el sitio y conectarlo al portfolio

1. Entra en `https://analytics.obelisklabs.dev`  
   (credenciales por defecto: `admin` / `umami` — cámbialas al primer login)
2. **Añade un sitio** → copia el **Website ID**
3. En `/opt/portfolio-cgc/.env` añade:
   ```
   NEXT_PUBLIC_UMAMI_ID=<website-id>
   ```
4. Redespliega el portfolio:
   ```bash
   cd /opt/portfolio-cgc && docker compose up -d --build
   ```

Para trackear webs adicionales en el futuro basta con añadir un sitio nuevo en Umami y repetir el paso 3 para cada proyecto.

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
