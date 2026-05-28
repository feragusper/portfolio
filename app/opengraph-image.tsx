import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Purple glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: 250,
            background: "#6c63ff",
            opacity: 0.08,
            filter: "blur(80px)",
          }}
        />

        {/* Pink glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 100,
            width: 300,
            height: 300,
            borderRadius: 150,
            background: "#ec4899",
            opacity: 0.05,
            filter: "blur(60px)",
          }}
        />

        {/* fp. logo */}
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontSize: 32,
            letterSpacing: -1,
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#ffffff" }}>f</span>
          <span style={{ color: "#6c63ff" }}>p</span>
          <span style={{ color: "#6c63ff" }}>.</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontSize: 72,
            letterSpacing: -3,
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          Fernando Pérez
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: 32,
            color: "#9ca3af",
            marginBottom: 48,
          }}
        >
          Software Engineer
        </div>

        {/* Tags row */}
        <div style={{ display: "flex", gap: 12 }}>
          {["20+ years", "Android", "AI & Agentic", "Web & Backend"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(108,99,255,0.35)",
                background: "rgba(108,99,255,0.08)",
                color: "#a78bfa",
                fontFamily: "sans-serif",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 100,
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "rgba(156,163,175,0.5)",
            fontWeight: 400,
          }}
        >
          feragusper.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
