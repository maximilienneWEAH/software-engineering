import { useState } from "react";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { StatCard } from "../Components/layout/StatCard";
import { MOCK_PATIENTS } from "../Data/patients";

export const NurseDashboard = ({ user }) => {
  const [vitals, setVitals] = useState({ bp: "", temp: "", o2: "", pulse: "" });
  const [selectedPatient, setSelectedPatient] = useState("");
  const [triageLevel, setTriageLevel] = useState("");
  const [saved, setSaved] = useState(false);

  const triageColors = {
    "Emergency (Red)": C.danger,
    "Urgent (Orange)": C.warning,
    "Semi-urgent (Yellow)": "#EAB308",
    "Non-urgent (Green)": C.success,
  };

  const handleSaveVitals = () => {
    if (!selectedPatient || !vitals.bp) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="animate-in">
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Nurse Station</h2>
        <p style={{ color: C.muted, fontSize: 13 }}>{user.ward} · {user.hospital}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
        <StatCard label="Assigned Patients" value="12" icon="👥" color={C.primary} />
        <StatCard label="Vitals Pending" value="4" icon="❤️" color={C.warning} />
        <StatCard label="Triage Today" value="8" icon="🚑" color={C.danger} />
        <StatCard label="Completed" value="18" icon="✅" color={C.success} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Vitals Entry */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>📊 Record Patient Vitals</h3>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 6 }}>Select Patient</label>
            <select value={selectedPatient} onChange={e => setSelectedPatient(e.target.value)}
              style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, color: C.text }}>
              <option value="">-- Choose patient --</option>
              {MOCK_PATIENTS.map(p => <option key={p.id} value={p.id}>{p.name} ({p.id})</option>)}
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[
              { key: "bp", label: "Blood Pressure", placeholder: "120/80 mmHg", icon: "🩸" },
              { key: "temp", label: "Temperature", placeholder: "37.0 °C", icon: "🌡️" },
              { key: "o2", label: "Oxygen Saturation", placeholder: "98%", icon: "💨" },
              { key: "pulse", label: "Pulse Rate", placeholder: "72 bpm", icon: "❤️" },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 11, fontWeight: 600, color: C.muted, display: "block", marginBottom: 4 }}>{f.icon} {f.label}</label>
                <input value={vitals[f.key]} onChange={e => setVitals({ ...vitals, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13 }} />
              </div>
            ))}
          </div>
          <button onClick={handleSaveVitals}
            style={{ width: "100%", padding: "10px", borderRadius: 8, background: saved ? C.success : C.primary, color: "#fff", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer" }}>
            {saved ? "✅ Vitals Saved!" : "Save Vitals"}
          </button>
        </Card>

        {/* Triage */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, color: C.text }}>🚑 Patient Triage</h3>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: C.muted, display: "block", marginBottom: 6 }}>Triage Level</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {Object.entries(triageColors).map(([level, color]) => (
                <button key={level} onClick={() => setTriageLevel(level)}
                  style={{
                    padding: "10px 14px", borderRadius: 8, border: `2px solid ${triageLevel === level ? color : C.border}`,
                    background: triageLevel === level ? color + "15" : "#fff", cursor: "pointer",
                    textAlign: "left", fontSize: 13, fontWeight: triageLevel === level ? 600 : 400,
                    color: triageLevel === level ? color : C.text, display: "flex", alignItems: "center", gap: 8,
                  }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: color, display: "inline-block" }} />
                  {level}
                </button>
              ))}
            </div>
          </div>
          <div style={{ padding: "12px", background: C.bg, borderRadius: 8, marginTop: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 4 }}>WARD OCCUPANCY</div>
            {[
              { ward: "Emergency", occ: 85, color: C.danger },
              { ward: "General", occ: 62, color: C.primary },
              { ward: "Pediatrics", occ: 71, color: C.info },
            ].map(w => (
              <div key={w.ward} style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 3 }}>
                  <span style={{ color: C.text, fontWeight: 500 }}>{w.ward}</span>
                  <span style={{ color: w.color, fontWeight: 600 }}>{w.occ}%</span>
                </div>
                <div style={{ height: 6, background: C.border, borderRadius: 3 }}>
                  <div style={{ width: `${w.occ}%`, height: "100%", borderRadius: 3, background: w.color }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default NurseDashboard;