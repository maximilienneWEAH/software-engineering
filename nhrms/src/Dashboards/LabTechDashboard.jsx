import { useState } from "react";
import { StatCard } from "../Components/layout/StatCard";
import { C } from "../Styles/theme";
import Card from "../Components/layout/Card";
import { MOCK_LAB_RESULTS } from "../Data/labResults";
import { MOCK_PATIENTS } from "../Data/patients";
import { StatusBadge } from "../Components/layout/StatusBadge";

export const LabTechDashboard = ({ user }) => {
  const [form, setForm] = useState({ patient: "", test: "", result: "", status: "Normal", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.patient || !form.test) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ patient: "", test: "", result: "", status: "Normal", notes: "" }); }, 2000);
  };

  return (
    <div className="animate-in">
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Lab Technician Panel</h2>
        <p style={{ color: C.muted, fontSize: 13 }}>{user.hospital} · Laboratory Department</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
        <StatCard label="Tests Today" value="18" icon="🔬" color={C.primary} />
        <StatCard label="Pending" value="5" icon="⏳" color={C.warning} />
        <StatCard label="Critical Results" value="2" icon="🚨" color={C.danger} />
        <StatCard label="Completed" value="11" icon="✅" color={C.success} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Upload Lab Result */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>📤 Upload Lab Result</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 4 }}>Patient</label>
              <select value={form.patient} onChange={e => setForm({ ...form, patient: e.target.value })}
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13 }}>
                <option value="">-- Select patient --</option>
                {MOCK_PATIENTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 4 }}>Test Type</label>
              <input value={form.test} onChange={e => setForm({ ...form, test: e.target.value })}
                placeholder="e.g. Complete Blood Count"
                style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13 }} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 4 }}>Result / Findings</label>
              <textarea value={form.result} onChange={e => setForm({ ...form, result: e.target.value })}
                placeholder="Enter test values and findings..."
                rows={3} style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, resize: "vertical" }} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 4 }}>Result Status</label>
              <div style={{ display: "flex", gap: 8 }}>
                {["Normal", "Abnormal", "Critical"].map(s => (
                  <button key={s} onClick={() => setForm({ ...form, status: s })}
                    style={{
                      flex: 1, padding: "8px", borderRadius: 8, border: `2px solid ${form.status === s ? (s === "Normal" ? C.success : s === "Abnormal" ? C.warning : C.danger) : C.border}`,
                      background: form.status === s ? (s === "Normal" ? "#D1FAE5" : s === "Abnormal" ? "#FEF3C7" : "#FEE2E2") : "#fff",
                      color: s === "Normal" ? "#065F46" : s === "Abnormal" ? "#92400E" : "#991B1B",
                      fontSize: 12, fontWeight: 600, cursor: "pointer",
                    }}>{s}</button>
                ))}
              </div>
            </div>
            {/* File upload mock */}
            <div style={{ border: `2px dashed ${C.border}`, borderRadius: 8, padding: "16px", textAlign: "center", cursor: "pointer", background: C.bg }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>📎</div>
              <div style={{ fontSize: 12, color: C.muted }}>Attach report (PDF/Image) · click to upload</div>
            </div>
            <button onClick={handleSubmit}
              style={{ padding: "10px", borderRadius: 8, background: submitted ? C.success : C.primary, color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}>
              {submitted ? "✅ Result Uploaded!" : "Upload Lab Result"}
            </button>
          </div>
        </Card>

        {/* Recent Results */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>Recent Lab Results</h3>
          {MOCK_LAB_RESULTS.map(r => (
            <div key={r.id} style={{ padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{r.patientName}</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>{r.test} · {r.date}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
              <div style={{ marginTop: 6, display: "flex", flexWrap: "wrap", gap: 4 }}>
                {Object.entries(r.values).map(([k, v]) => (
                  <span key={k} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: C.bg, color: C.muted, fontWeight: 500 }}>{k}: {v}</span>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
export default LabTechDashboard;