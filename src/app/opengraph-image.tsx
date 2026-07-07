import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ObeliskLabs — Laboratorio personal de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#131313",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #adc6ff 0%, #4edea3 100%)",
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "40%",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(173,198,255,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Label */}
          <div
            style={{
              color: "#4edea3",
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            Laboratorio personal de software
          </div>

          {/* Brand name */}
          <div
            style={{
              color: "#e5e2e1",
              fontSize: "104px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "36px",
            }}
          >
            ObeliskLabs
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#8b90a0",
              fontSize: "30px",
              lineHeight: 1.5,
              maxWidth: "680px",
            }}
          >
            Donde las ideas se convierten en realidad.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ color: "#adc6ff", fontSize: "24px", fontWeight: 600 }}>
            obelisklabs.dev
          </div>
          <div style={{ color: "#414755", fontSize: "20px" }}>
            by Carlos Gálvez
          </div>
        </div>
      </div>
    ),
    size
  );
}
