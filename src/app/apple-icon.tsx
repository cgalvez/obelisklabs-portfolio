import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#131313",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#adc6ff",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          OL
        </span>
      </div>
    ),
    { ...size }
  );
}
