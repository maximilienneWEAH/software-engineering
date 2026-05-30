import { C } from "../../Styles/theme";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const MENU_ITEMS = [
  {
    id: "dashboard",
    path: "/dashboard",
    label: "Dashboard",
    icon: "🏠",
    roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"]
  },

  {
    id: "patients",
    path: "/patients",
    label: "Patients",
    icon: "👥",
    roles: ["doctor", "nurse", "admin"]
  },

  {
    id: "doctors",
    path: "/doctors",
    label: "Doctors",
    icon: "👨‍⚕️",
    roles: ["admin", "ministry"]
  },

  {
    id: "nurses",
    path: "/nurses",
    label: "Nurses",
    icon: "👩‍⚕️",
    roles: ["admin", "ministry"]
  },

  {
    id: "lab_results",
    path: "/lab_results",
    label: "Lab Results",
    icon: "🔬",
    roles: ["doctor", "nurse", "lab_tech", "admin", "patient"]
  },

  {
    id: "appointments",
    path: "/appointments",
    label: "Appointments",
    icon: "📅",
    roles: ["doctor", "nurse", "admin", "patient"]
  },

  {
    id: "medical_records",
    path: "/medical_records",
    label: "Medical Records",
    icon: "📋",
    roles: ["doctor", "admin", "patient"]
  },

  {
    id: "referrals",
    path: "/referrals",
    label: "Referrals",
    icon: "🔄",
    roles: ["doctor", "admin"]
  },

  {
    id: "facilities",
    path: "/facilities",
    label: "Facilities",
    icon: "🏥",
    roles: ["admin", "ministry"]
  },

  {
    id: "user_management",
    path: "/user_management",
    label: "User Management",
    icon: "⚙️",
    roles: ["admin"]
  },

  {
    id: "ministry_dashboard",
    path: "/ministry_dashboard",
    label: "Ministry Dashboard",
    icon: "🏛️",
    roles: ["ministry", "admin"]
  },

  {
    id: "ai_chat",
    path: "/ai_chat",
    label: "AI Health Assistant",
    icon: "🤖",
    roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"]
  },

  {
    id: "reports",
    path: "/reports",
    label: "Reports & Analytics",
    icon: "📊",
    roles: ["doctor", "admin", "ministry"]
  },

  {
    id: "audit_logs",
    path: "/audit_logs",
    label: "Audit Logs",
    icon: "🔍",
    roles: ["admin", "ministry"]
  },

  {
    id: "settings",
    path: "/settings",
    label: "Settings",
    icon: "⚙️",
    roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"]
  },
];
export const Sidebar = ({
  user,
  collapsed,
  onCollapse,
}) => {

  const navigate = useNavigate();

  const location = useLocation();

  const activePage =
    location.pathname;

  const userMenu =
    MENU_ITEMS.filter((item) =>
      item.roles.includes(user.role)
    );

  return (
    <aside
      style={{
        width: collapsed
          ? 72
          : 250,

        minHeight: "100vh",

        background: C.sidebar,

        position: "fixed",

        left: 0,

        top: 0,

        bottom: 0,

        zIndex: 100,

        display: "flex",

        flexDirection: "column",

        transition:
          "all 0.25s ease",

        boxShadow:
          "4px 0 20px rgba(0,0,0,0.15)",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          padding: collapsed
            ? "18px 10px"
            : "18px 18px",

          borderBottom:
            "1px solid rgba(255,255,255,0.08)",

          display: "flex",

          alignItems: "center",

          gap: 12,
        }}
      >

        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: C.primary,
            display: "flex",
            alignItems: "center",
            justifyContent:
              "center",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          ⚕️
        </div>

        {!collapsed && (
          <div>

            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              NHRMS
            </div>

            <div
              style={{
                color:
                  "rgba(255,255,255,0.45)",

                fontSize: 9,

                letterSpacing:
                  "0.08em",

                textTransform:
                  "uppercase",
              }}
            >
              Cameroon
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          flex: 1,
          padding: "12px 8px",
          overflowY: "auto",
        }}
      >

        {userMenu.map((item) => {

          const active =
            activePage === item.path;

          return (
            <button
              key={item.id}

              onClick={() =>
                navigate(item.path)
              }

              title={
                collapsed
                  ? item.label
                  : ""
              }

              style={{
                width: "100%",

                display: "flex",

                alignItems: "center",

                gap: 12,

                padding: collapsed
                  ? "12px"
                  : "12px 14px",

                marginBottom: 4,

                borderRadius: 10,

                border: "none",

                cursor: "pointer",

                transition:
                  "all 0.15s ease",

                background: active
                  ? C.primary
                  : "transparent",

                color: active
                  ? "#fff"
                  : "rgba(255,255,255,0.65)",

                justifyContent:
                  collapsed
                    ? "center"
                    : "flex-start",

                fontSize: 13,

                fontWeight: active
                  ? 600
                  : 500,
              }}
            >

              <span
                style={{
                  fontSize: 16,
                }}
              >
                {item.icon}
              </span>

              {!collapsed && (
                <span>
                  {item.label}
                </span>
              )}

              {!collapsed &&
                active && (
                  <span
                    style={{
                      marginLeft:
                        "auto",

                      width: 6,

                      height: 6,

                      borderRadius:
                        "50%",

                      background:
                        "#7FFFD4",
                    }}
                  />
                )}
            </button>
          );
        })}
      </nav>

      {/* USER SECTION */}
      <div
        style={{
          padding: collapsed
            ? "12px 8px"
            : "14px 16px",

          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >

          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: C.primary,
              display: "flex",
              alignItems: "center",
              justifyContent:
                "center",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {user.avatar}
          </div>

          {!collapsed && (
            <div>

              <div
                style={{
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {user.name}
              </div>

              <div
                style={{
                  color:
                    "rgba(255,255,255,0.45)",

                  fontSize: 10,

                  textTransform:
                    "uppercase",
                }}
              >
                {user.role.replace(
                  "_",
                  " "
                )}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onCollapse}

          style={{
            width: "100%",
            marginTop: 12,
            padding: "8px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background:
              "rgba(255,255,255,0.07)",
            color:
              "rgba(255,255,255,0.6)",
          }}
        >
          {collapsed
            ? "→ Expand"
            : "← Collapse"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;