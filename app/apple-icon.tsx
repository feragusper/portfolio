import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#0a0a0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: 60,
            background: "#6c63ff",
            opacity: 0.15,
            filter: "blur(30px)",
          }}
        />
        {/* fp text */}
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontSize: 80,
            letterSpacing: -3,
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          <span style={{ color: "#ffffff" }}>f</span>
          <span style={{ color: "#6c63ff" }}>p</span>
        </div>
        {/* dot */}
        <div
          style={{
            position: "absolute",
            bottom: 38,
            right: 34,
            width: 14,
            height: 14,
            borderRadius: 7,
            background: "#6c63ff",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
