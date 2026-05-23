import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
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
            width: 20,
            height: 20,
            borderRadius: 10,
            background: "#6c63ff",
            opacity: 0.25,
            filter: "blur(6px)",
          }}
        />
        {/* fp text */}
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: -0.5,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#ffffff" }}>f</span>
          <span style={{ color: "#6c63ff" }}>p</span>
        </div>
        {/* dot */}
        <div
          style={{
            position: "absolute",
            bottom: 6,
            right: 5,
            width: 3,
            height: 3,
            borderRadius: 2,
            background: "#6c63ff",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
