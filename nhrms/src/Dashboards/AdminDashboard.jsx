import Card from "../Components/layout/Card";
import C from "../Components/layout/Card";
import { StatCard } from "../Components/layout/StatCard";


export const AdminDashboard = () => (
  <div className="animate-in">
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>System Administration</h2>
      <p style={{ color: C.muted, fontSize: 13 }}>National NHRMS Control Panel</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
      <StatCard label="Total Users" value="2,847" icon="👥" color={C.primary} trend={12} />
      <StatCard label="Hospitals" value="312" icon="🏥" color={C.info} />
      <StatCard label="Active Sessions" value="148" icon="🖥️" color={C.success} />
      <StatCard label="System Alerts" value="5" icon="⚠️" color={C.warning} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
      <Card>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>System Health & Monitoring</h3>
        {[
          { label: "Database", value: 92, color: C.success, detail: "PostgreSQL · 2.1TB used" },
          { label: "API Gateway", value: 78, color: C.info, detail: "256ms avg response" },
          { label: "File Storage", value: 54, color: C.primary, detail: "8.7TB / 16TB" },
          { label: "Backup", value: 100, color: C.success, detail: "Last: 2h ago" },
        ].map(s => (
          <div key={s.label} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 13 }}>
              <span style={{ fontWeight: 600, color: C.text }}>{s.label}</span>
              <span style={{ color: C.muted, fontSize: 11 }}>{s.detail}</span>
            </div>
            <div style={{ height: 8, background: C.bg, borderRadius: 4 }}>
              <div style={{ width: `${s.value}%`, height: "100%", borderRadius: 4, background: s.color }} />
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>User Roles Distribution</h3>
        {[
          { role: "Doctors", count: 840, icon: "👨‍⚕️" },
          { role: "Nurses", count: 1240, icon: "👩‍⚕️" },
          { role: "Lab Techs", count: 320, icon: "🔬" },
          { role: "Admins", count: 45, icon: "⚙️" },
          { role: "Patients", count: 12400, icon: "👥" },
        ].map(r => (
          <div key={r.role} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, color: C.text }}>{r.icon} {r.role}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>{r.count.toLocaleString()}</span>
          </div>
        ))}
      </Card>
    </div>
  </div>
);
