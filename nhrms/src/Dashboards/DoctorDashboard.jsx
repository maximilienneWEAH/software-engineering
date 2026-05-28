import Card from "../Components/layout/Card";
import { StatCard } from "../Components/layout/StatCard";
import { MOCK_PATIENTS } from "../Data/appointments";
import { C } from "../Styles/theme";
import { StatusBadge } from "../Components/layout/StatusBadge";
import { MiniBarChart } from "../Components/charts/MiniBarChart";
import { MOCK_APPOINTMENTS } from "../Data/appointments";

export const DoctorDashboard = ({ user }) => {
  const today = new Date().toLocaleDateString("en-GB");
  return (
    <div className="animate-in">
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Welcome, {user.name}</h2>
        <p style={{ color: C.muted, fontSize: 13 }}>{user.specialization} · {user.hospital} · {today}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
        <StatCard label="My Patients" value="24" icon="👥" color={C.primary} trend={8} />
        <StatCard label="Today's Appointments" value="6" icon="📅" color={C.info} trend={-2} />
        <StatCard label="Pending Lab Results" value="3" icon="🔬" color={C.warning} />
        <StatCard label="Critical Cases" value="1" icon="🚨" color={C.danger} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        {/* Today's Appointments */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>Today's Appointments</h3>
          {MOCK_APPOINTMENTS.map(a => (
            <div key={a.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.primary + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👤</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{a.patient}</div>
                  <div style={{ fontSize: 11, color: C.muted }}>{a.time} · {a.type}</div>
                </div>
              </div>
              <StatusBadge status={a.status} />
            </div>
          ))}
        </Card>

        {/* Recent Patients */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>Critical Watch</h3>
          {MOCK_PATIENTS.filter(p => p.status === "Critical" || p.status === "Quarantine").map(p => (
            <div key={p.id} style={{ padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{p.name}</div>
              <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{p.condition}</div>
              <StatusBadge status={p.status} />
            </div>
          ))}
          <div style={{ padding: "10px 0" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Patient Volume (Weekly)</div>
            <div style={{ marginTop: 8 }}>
              <MiniBarChart data={[
                { label: "Mon", value: 8 }, { label: "Tue", value: 12 }, { label: "Wed", value: 6 },
                { label: "Thu", value: 15 }, { label: "Fri", value: 9 }, { label: "Sat", value: 4 },
              ]} color={C.primary} height={70} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

