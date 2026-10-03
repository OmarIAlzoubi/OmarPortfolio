import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "Omar Al-Zoubi — AI Engineer. Practical AI systems, built with intention.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#f8f9f5",
        color: "#202b25",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#5b7463", fontSize: 18, letterSpacing: 4 }}>
        AI ENGINEER · SAUDI ARABIA
      </div>
      <div style={{ display: "flex", fontSize: 36, marginTop: 50 }}>Hello, it’s</div>
      <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>
        Omar Al-Zoubi.
      </div>
      <div style={{ display: "flex", fontSize: 25, marginTop: 30, color: "#66736c" }}>
        Practical AI systems. From intelligence to experience.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 15,
          marginTop: 45,
          padding: "18px 25px",
          borderRadius: 40,
          background: "#e5eddd",
          alignSelf: "flex-start",
          color: "#4f6557",
        }}
      >
        GENERATIVE AI · RETRIEVAL · VOICE · VISION · BACKEND SYSTEMS
      </div>
    </div>,
    size,
  );
}
