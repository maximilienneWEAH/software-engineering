import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { StatCard } from "../Components/layout/StatCard";
import { MOCK_LAB_RESULTS } from "../Data/labResults";
import { StatusBadge } from "../Components/layout/StatusBadge";

export const LabResultsPage = () => (
  <div className="animate-in">
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Lab Results</h2>
        <p style={{ color: C.muted, fontSize: 13 }}>All diagnostic test results</p>
      </div>
      <button style={{ padding: "10px 18px", borderRadius: 8, background: C.primary, color: "#fff", fontSize: 13, fontWeight: 600, border: "none" }}>+ New Result</button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
      <StatCard label="Normal" value="8" icon="✅" color={C.success} />
      <StatCard label="Abnormal" value="4" icon="⚠️" color={C.warning} />
      <StatCard label="Critical" value="2" icon="🚨" color={C.danger} />
    </div>
    <Card style={{ padding: 0, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: C.bg }}>
            {["Result ID", "Patient", "Test", "Status", "Date", "Doctor", "Technician", "Actions"].map(h => (
              <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.04em", borderBottom: `1px solid ${C.border}` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MOCK_LAB_RESULTS.map((r, i) => (
            <tr key={r.id} style={{ background: i % 2 === 0 ? "#fff" : "#FAFCFE" }}>
              <td style={{ padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.primary, borderBottom: `1px solid ${C.border}` }}>{r.id}</td>
              <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600, color: C.text, borderBottom: `1px solid ${C.border}` }}>{r.patientName}</td>
              <td style={{ padding: "12px 16px", fontSize: 13, color: C.text, borderBottom: `1px solid ${C.border}` }}>{r.test}</td>
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}` }}><StatusBadge status={r.status} /></td>
              <td style={{ padding: "12px 16px", fontSize: 12, color: C.muted, borderBottom: `1px solid ${C.border}` }}>{r.date}</td>
              <td style={{ padding: "12px 16px", fontSize: 12, color: C.text, borderBottom: `1px solid ${C.border}` }}>{r.doctor}</td>
              <td style={{ padding: "12px 16px", fontSize: 12, color: C.text, borderBottom: `1px solid ${C.border}` }}>{r.tech}</td>
              <td style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <button style={{ padding: "5px 10px", borderRadius: 6, background: C.primary + "15", color: C.primary, fontSize: 11, fontWeight: 600, border: "none", cursor: "pointer" }}>View</button>
                  <button style={{ padding: "5px 10px", borderRadius: 6, background: "#FEF3C7", color: "#92400E", fontSize: 11, fontWeight: 600, border: "none", cursor: "pointer" }}>PDF</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);
