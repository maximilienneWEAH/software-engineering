import { C } from "../../Styles/theme";
const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "🏠", roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"] },
  { id: "patients", label: "Patients", icon: "👥", roles: ["doctor", "nurse", "admin"] },
  { id: "doctors", label: "Doctors", icon: "👨‍⚕️", roles: ["admin", "ministry"] },
  { id: "nurses", label: "Nurses", icon: "👩‍⚕️", roles: ["admin", "ministry"] },
  { id: "lab_results", label: "Lab Results", icon: "🔬", roles: ["doctor", "nurse", "lab_tech", "admin", "patient"] },
  { id: "appointments", label: "Appointments", icon: "📅", roles: ["doctor", "nurse", "admin", "patient"] },
  { id: "medical_records", label: "Medical Records", icon: "📋", roles: ["doctor", "admin", "patient"] },
  { id: "referrals", label: "Referrals", icon: "🔄", roles: ["doctor", "admin"] },
  { id: "facilities", label: "Facilities", icon: "🏥", roles: ["admin", "ministry"] },
  { id: "user_management", label: "User Management", icon: "⚙️", roles: ["admin"] },
  { id: "ministry_dashboard", label: "Ministry Dashboard", icon: "🏛️", roles: ["ministry", "admin"] },
  { id: "ai_chat", label: "AI Health Assistant", icon: "🤖", roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"] },
  { id: "reports", label: "Reports & Analytics", icon: "📊", roles: ["doctor", "admin", "ministry"] },
  { id: "audit_logs", label: "Audit Logs", icon: "🔍", roles: ["admin", "ministry"] },
  { id: "settings", label: "Settings", icon: "⚙️", roles: ["doctor", "nurse", "lab_tech", "admin", "ministry", "patient"] },
];

export const Sidebar = ({ user, activePage, onNavigate, collapsed, onCollapse }) => {
  const userMenu = MENU_ITEMS.filter(m => m.roles.includes(user.role));
  return (
    <div style={{
      width: collapsed ? 64 : 240, minHeight: "100vh", background: C.sidebar,
      display: "flex", flexDirection: "column", transition: "width 0.25s ease",
      position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 100,
      boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
    }}>
      {/* Logo */}
      <div style={{ padding: collapsed ? "20px 12px" : "20px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>⚕️</div>
        {!collapsed && (
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>NHRMS</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cameroon</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
        {userMenu.map(item => {
          const active = activePage === item.id;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : ""}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: collapsed ? "10px 14px" : "10px 12px",
                borderRadius: 8, marginBottom: 2, cursor: "pointer",
                background: active ? C.primary : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.65)",
                fontSize: 13, fontWeight: active ? 600 : 400,
                transition: "all 0.15s ease", border: "none",
                justifyContent: collapsed ? "center" : "flex-start",
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = C.sidebarHover; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; } }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && active && <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#7FFFD4" }} />}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div style={{ padding: collapsed ? "12px 8px" : "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
            {user.avatar}
          </div>
          {!collapsed && (
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{user.role.replace("_", " ")}</div>
            </div>
          )}
        </div>
        <button onClick={onCollapse} style={{ width: "100%", marginTop: 10, padding: "6px", borderRadius: 6, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)", fontSize: 11, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {collapsed ? "→" : "← Collapse"}
        </button>
      </div>
    </div>
  );
};
export default Sidebar;