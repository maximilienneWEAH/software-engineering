import { C } from "../../Styles/theme";
export const Topbar = ({ user, title, onLogout }) => (
  <div style={{
    height: 60, background: C.card, borderBottom: `1px solid ${C.border}`,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 24px", position: "sticky", top: 0, zIndex: 50,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  }}>
    <div>
      <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{title}</div>
      <div style={{ fontSize: 11, color: C.muted }}>National Health Records Management System</div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ position: "relative" }}>
        <button style={{ width: 36, height: 36, borderRadius: 8, background: C.bg, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🔔</button>
        <span style={{ position: "absolute", top: -2, right: -2, width: 16, height: 16, borderRadius: "50%", background: C.danger, color: "#fff", fontSize: 9, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>{user.avatar}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{user.name}</div>
          <div style={{ fontSize: 10, color: C.muted, textTransform: "capitalize" }}>{user.role.replace("_", " ")}</div>
        </div>
      </div>
      <button onClick={onLogout} style={{ padding: "7px 14px", borderRadius: 8, background: "#FEE2E2", color: "#991B1B", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer" }}>Logout</button>
    </div>
  </div>
);
export  default Topbar;