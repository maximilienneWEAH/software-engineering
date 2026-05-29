import Card from "../Components/layout/Card";
import { StatusBadge } from "../Components/layout/StatusBadge";
import { StatCard } from "../Components/layout/StatCard";
import { C } from "../Styles/theme";
import { MOCK_APPOINTMENTS } from "../Data/appointments";
import { MOCK_LAB_RESULTS } from "../Data/labResults";

export const PatientDashboard = ({ user }) => (
  <div className="animate-in">
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>My Health Portal</h2>
      <p style={{ color: C.muted, fontSize: 13 }}>Welcome, {user.name} · Blood Group: {user.bloodGroup}</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 24 }}>
      <StatCard label="My Appointments" value="2" icon="📅" color={C.primary} />
      <StatCard label="Lab Results" value="3" icon="🔬" color={C.info} />
      <StatCard label="Prescriptions" value="1" icon="💊" color={C.success} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <Card>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>My Upcoming Appointments</h3>
        {MOCK_APPOINTMENTS.slice(0, 2).map(a => (
          <div key={a.id} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: C.primary + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📅</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{a.doctor}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{a.date} at {a.time} · {a.type}</div>
              <StatusBadge status={a.status} />
            </div>
          </div>
        ))}
      </Card>
      <Card>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>Recent Lab Results</h3>
        {MOCK_LAB_RESULTS.slice(0, 2).map(r => (
          <div key={r.id} style={{ padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{r.test}</div>
              <StatusBadge status={r.status} />
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{r.date} · {r.tech}</div>
          </div>
        ))}
        <div style={{ marginTop: 12, padding: "10px", background: "#D1FAE5", borderRadius: 8, fontSize: 12, color: "#065F46", fontWeight: 500 }}>
          💡 Your recent CBC result is Normal. Keep up the healthy lifestyle!
        </div>
      </Card>
    </div>
  </div>
);
export default PatientDashboard;