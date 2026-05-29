import { useState } from "react";
import axios from "axios";
import { C } from "../Styles/theme";

export const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ROLE_OPTIONS = [
    { value: "doctor", label: "Doctor", icon: "👨‍⚕️", color: "#0F766E" },
    { value: "nurse", label: "Nurse", icon: "👩‍⚕️", color: "#7C3AED" },
    { value: "lab_tech", label: "Lab Technician", icon: "🔬", color: "#2563EB" },
    { value: "admin", label: "System Admin", icon: "⚙️", color: "#D97706" },
    { value: "ministry", label: "Ministry of Health", icon: "🏛️", color: "#DC2626" },
    { value: "patient", label: "Patient", icon: "🧑‍🦱", color: "#059669" },
  ];

  // LOGIN FUNCTION
  const handleLogin = async () => {
    if (!role) {
      setError("Please select your role first.");
      return;
    }

    if (!email || !password) {
      setError("Please enter your credentials.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // BACKEND REQUEST
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
          role,
        }
      );

      console.log("Login response:", res.data);

      // SEND USER TO APP.JS
      onLogin(res.data.user);

    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.message ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${C.sidebar} 0%, #0F3460 50%, #16213E 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 480,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: C.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              margin: "0 auto 16px",
            }}
          >
            ⚕️
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            NHRMS Cameroon
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 13,
              marginTop: 4,
            }}
          >
            National Health Records Management System
          </p>
        </div>

        {/* LOGIN CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.96)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: C.text,
              marginBottom: 6,
            }}
          >
            Sign in to your portal
          </h2>

          <p
            style={{
              fontSize: 13,
              color: C.muted,
              marginBottom: 24,
            }}
          >
            Select your role and enter your credentials
          </p>

          {/* ROLE SELECTION */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                color: C.text,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Select Your Role
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
              }}
            >
              {ROLE_OPTIONS.map((r) => (
                <button
                  key={r.value}
                  onClick={() => {
                    setRole(r.value);
                    setError("");
                  }}
                  style={{
                    padding: "10px 8px",
                    borderRadius: 8,
                    border: `2px solid ${
                      role === r.value ? r.color : C.border
                    }`,
                    background:
                      role === r.value ? r.color + "12" : "#fff",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 20 }}>
                    {r.icon}
                  </span>

                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color:
                        role === r.value
                          ? r.color
                          : C.muted,
                    }}
                  >
                    {r.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* EMAIL */}
          <div style={{ marginBottom: 14 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                color: C.text,
                marginBottom: 6,
              }}
            >
              Email Address
            </label>

            <input
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              type="email"
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontSize: 14,
                outline: "none",
                color: C.text,
              }}
            />
          </div>

          {/* PASSWORD */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                color: C.text,
                marginBottom: 6,
              }}
            >
              Password
            </label>

            <input
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              type="password"
              onKeyDown={(e) =>
                e.key === "Enter" && handleLogin()
              }
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontSize: 14,
                outline: "none",
                color: C.text,
              }}
            />
          </div>

          {/* ERROR */}
          {error && (
            <div
              style={{
                background: "#FEE2E2",
                color: "#991B1B",
                padding: "10px 14px",
                borderRadius: 8,
                fontSize: 13,
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              background: loading
                ? C.muted
                : C.primary,
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              border: "none",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {loading
              ? "Authenticating..."
              : "Sign In →"}
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: C.muted,
              marginTop: 16,
            }}
          >
            🔒 Secure Government Health Network · Cameroon MINSANTE
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
