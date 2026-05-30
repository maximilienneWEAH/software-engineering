import { C } from "../../Styles/theme";

export const Topbar = ({
  user,
  title,
  onLogout,
}) => {

  return (
    <header
      style={{
        height: 64,

        background: C.card,

        borderBottom: `1px solid ${C.border}`,

        position: "sticky",
        top: 0,
        zIndex: 50,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "0 24px",

        boxShadow:
          "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >

      {/* LEFT SECTION */}
      <div>

        {/* PAGE TITLE */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {/* SUBTITLE */}
        <div
          style={{
            fontSize: 11,
            color: C.muted,
            marginTop: 2,
          }}
        >
          National Health Records
          Management System
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >

        {/* SEARCH BAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",

            background: C.bg,

            border: `1px solid ${C.border}`,

            borderRadius: 10,

            padding: "0 12px",

            height: 38,

            minWidth: 240,
          }}
        >
          <span
            style={{
              fontSize: 14,
              marginRight: 8,
              opacity: 0.6,
            }}
          >
            🔍
          </span>

          <input
            type="text"
            placeholder="Search..."

            style={{
              border: "none",
              outline: "none",

              background: "transparent",

              width: "100%",

              fontSize: 13,

              color: C.text,
            }}
          />
        </div>

        {/* NOTIFICATION */}
        <div
          style={{
            position: "relative",
          }}
        >
          <button
            style={{
              width: 38,
              height: 38,

              borderRadius: 10,

              border:
                `1px solid ${C.border}`,

              background: C.bg,

              cursor: "pointer",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              fontSize: 16,

              transition:
                "all 0.15s ease",
            }}
          >
            🔔
          </button>

          {/* NOTIFICATION COUNT */}
          <span
            style={{
              position: "absolute",

              top: -4,
              right: -4,

              width: 18,
              height: 18,

              borderRadius: "50%",

              background: C.danger,

              color: "#fff",

              fontSize: 9,
              fontWeight: 700,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </span>
        </div>

        {/* USER PROFILE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >

          {/* AVATAR */}
          <div
            style={{
              width: 38,
              height: 38,

              borderRadius: "50%",

              background: C.primary,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#fff",

              fontSize: 12,
              fontWeight: 700,

              flexShrink: 0,
            }}
          >
            {user.avatar}
          </div>

          {/* USER INFO */}
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: C.text,
                lineHeight: 1.2,
              }}
            >
              {user.name}
            </div>

            <div
              style={{
                fontSize: 10,
                color: C.muted,

                textTransform: "capitalize",

                marginTop: 2,
              }}
            >
              {user.role.replace("_", " ")}
            </div>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={onLogout}

          style={{
            padding: "9px 14px",

            borderRadius: 10,

            border: "none",

            cursor: "pointer",

            background: "#FEE2E2",

            color: "#991B1B",

            fontSize: 12,
            fontWeight: 600,

            transition:
              "all 0.15s ease",
          }}

          onMouseEnter={(e) => {
            e.currentTarget.style.opacity =
              "0.9";
          }}

          onMouseLeave={(e) => {
            e.currentTarget.style.opacity =
              "1";
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;

