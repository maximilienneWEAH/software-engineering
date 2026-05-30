import DashboardLayout from "../Components/layout/DashboardLayout";

import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";

export const SettingsPage = ({ user, onLogout }) => {
  return (
    <DashboardLayout user={user} onLogout={onLogout}>
      <div className="animate-in">
        <div style={{ marginBottom: 20 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: C.text,
            }}
          >
            Settings
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
            }}
          >
            Account and system preferences
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 16,
          }}
        >
          <Card>
            <div
              style={{
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: C.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                  margin: "0 auto 12px",
                }}
              >
                {user.avatar}
              </div>

              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: C.text,
                }}
              >
                {user.name}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: C.muted,
                  textTransform: "capitalize",
                }}
              >
                {user.role.replace("_", " ")}
              </div>

              <button
                style={{
                  marginTop: 10,
                  padding: "6px 14px",
                  borderRadius: 20,
                  background: C.primary + "15",
                  color: C.primary,
                  fontSize: 12,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Change Photo
              </button>
            </div>

            <div
              style={{
                borderTop: `1px solid ${C.border}`,
                paddingTop: 12,
              }}
            >
              {[
                "Profile Settings",
                "Security",
                "Notifications",
                "Language",
                "Help & Support",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    marginBottom: 2,
                    cursor: "pointer",
                    fontSize: 13,
                    color: C.text,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = C.bg)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Profile Settings
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                {
                  label: "Full Name",
                  value: user.name,
                },
                {
                  label: "Email",
                  value: user.email,
                },
                {
                  label: "Role",
                  value: user.role,
                },
                {
                  label: "Region",
                  value: user.region || "—",
                },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.muted,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {f.label}
                  </label>

                  <input
                    defaultValue={f.value}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                      fontSize: 13,
                      color: C.text,
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              style={{
                marginTop: 16,
                padding: "10px 24px",
                borderRadius: 8,
                background: C.primary,
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;