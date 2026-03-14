import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Scout Co | Custom AI Systems & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            position: "relative",
            zIndex: 10,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#f1f5f9",
                letterSpacing: "-0.5px",
              }}
            >
              AI Scout Co
            </span>
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              color: "#f1f5f9",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            <span>Custom AI Systems</span>
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              &amp; Automation
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 26,
              color: "#94a3b8",
              fontWeight: 400,
              maxWidth: 700,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            If you can dream it, I build it. Book a free discovery call.
          </p>

          {/* Bottom badge row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 16,
            }}
          >
            {["AI Discovery", "Custom Build", "Ongoing Support"].map((label) => (
              <div
                key={label}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(59,130,246,0.4)",
                  background: "rgba(59,130,246,0.1)",
                  color: "#93c5fd",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
