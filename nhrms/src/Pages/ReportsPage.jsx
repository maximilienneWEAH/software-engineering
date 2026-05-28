import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { MiniBarChart } from "../Components/charts/MiniBarChart";
import { LineSparkChart } from "../Components/charts/LineSparkChart";


export  const ReportsPage = () => (
  <div className="animate-in">
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Reports & Analytics</h2>
      <p style={{ color: C.muted, fontSize: 13 }}>Health intelligence and system metrics</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
      <Card>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Monthly Patient Volume</h3>
        <MiniBarChart data={[
          { label: "Jan", value: 1240 }, { label: "Feb", value: 980 }, { label: "Mar", value: 1480 },
          { label: "Apr", value: 1120 }, { label: "May", value: 1560 }, { label: "Jun", value: 890 },
        ]} color={C.primary} height={90} />
      </Card>
      <Card>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Disease Trend (Malaria)</h3>
        <div style={{ marginTop: 8 }}>
          <LineSparkChart data={[320, 450, 280, 580, 420, 690, 540, 780, 620]} color={C.danger} height={70} />
        </div>
        <div style={{ fontSize: 11, color: C.muted, marginTop: 8 }}>Jan–Sep 2025 · Far North Region</div>
      </Card>
      <Card style={{ gridColumn: "1 / -1" }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Downloadable Reports</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { name: "Monthly Health Summary", icon: "📊", date: "May 2025" },
            { name: "Disease Surveillance Report", icon: "🦠", date: "Q1 2025" },
            { name: "Hospital Utilization", icon: "🏥", date: "April 2025" },
            { name: "Vaccine Coverage Report", icon: "💉", date: "2025" },
          ].map(r => (
            <div key={r.name} style={{ padding: "14px", border: `1px solid ${C.border}`, borderRadius: 8, textAlign: "center", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = C.bg}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{r.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginBottom: 4 }}>{r.name}</div>
              <div style={{ fontSize: 10, color: C.muted, marginBottom: 10 }}>{r.date}</div>
              <button style={{ padding: "5px 12px", borderRadius: 20, background: C.primary, color: "#fff", fontSize: 11, fontWeight: 600, border: "none", cursor: "pointer" }}>📥 Download</button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);