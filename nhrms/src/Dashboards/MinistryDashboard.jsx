import { useState } from "react";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { HOSPITAL_DATA } from "../Data/hospitalData";
import { DISEASE_DATA } from "../Data/diseaseData";
import { StatCard } from "../Components/layout/StatCard";

export const MinistryDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  //const [chartMode, setChartMode] = useState("disease");

  const regions = ["All Regions", ...DISEASE_DATA.map(d => d.region)];
  const filteredData = selectedRegion === "All Regions" ? DISEASE_DATA : DISEASE_DATA.filter(d => d.region === selectedRegion);

  // Simple inline bar chart for diseases
  const DiseaseBar = ({ label, value, max, color }) => (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
        <span style={{ color: C.text, fontWeight: 500 }}>{label}</span>
        <span style={{ color, fontWeight: 700 }}>{value.toLocaleString()}</span>
      </div>
      <div style={{ height: 10, background: C.bg, borderRadius: 5 }}>
        <div style={{ width: `${(value / max) * 100}%`, height: "100%", borderRadius: 5, background: color, transition: "width 0.5s" }} />
      </div>
    </div>
  );

  const totalsByDisease = {
    malaria: DISEASE_DATA.reduce((s, d) => s + d.malaria, 0),
    cholera: DISEASE_DATA.reduce((s, d) => s + d.cholera, 0),
    typhoid: DISEASE_DATA.reduce((s, d) => s + d.typhoid, 0),
    tuberculosis: DISEASE_DATA.reduce((s, d) => s + d.tuberculosis, 0),
    hiv: DISEASE_DATA.reduce((s, d) => s + d.hiv, 0),
  };

  return (
    <div className="animate-in">
      <div style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>🏛️ Ministry of Health Dashboard</h2>
          <p style={{ color: C.muted, fontSize: 13 }}>National Health Intelligence · République du Cameroun</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, color: C.text }}>
            {regions.map(r => <option key={r}>{r}</option>)}
          </select>
          <button style={{ padding: "8px 14px", borderRadius: 8, background: C.primary, color: "#fff", fontSize: 12, fontWeight: 600, border: "none" }}>📤 Export</button>
        </div>
      </div>

      {/* National KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 20 }}>
        {[
          { label: "National Patients", value: "1.2M", icon: "👥", color: C.primary, trend: 5 },
          { label: "Active Outbreaks", value: "3", icon: "🦠", color: C.danger, trend: -1 },
          { label: "Hospitals", value: "312", icon: "🏥", color: C.info },
          { label: "Healthcare Workers", value: "24.8K", icon: "⚕️", color: C.success, trend: 3 },
          { label: "Vaccination Rate", value: "67%", icon: "💉", color: C.warning, trend: 4 },
        ].map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {/* Disease Distribution */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: C.text }}>🦠 Disease Distribution by Region</h3>
          <p style={{ fontSize: 11, color: C.muted, marginBottom: 16 }}>Active cases per region · 2025</p>
          <div style={{ overflowY: "auto", maxHeight: 280 }}>
            {filteredData.map(d => (
              <div key={d.region} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.primary, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>{d.region}</div>
                <DiseaseBar label="Malaria" value={d.malaria} max={2100} color="#10B981" />
                <DiseaseBar label="Cholera" value={d.cholera} max={450} color="#F59E0B" />
                <DiseaseBar label="Typhoid" value={d.typhoid} max={780} color="#6366F1" />
                <DiseaseBar label="Tuberculosis" value={d.tuberculosis} max={145} color="#EF4444" />
              </div>
            ))}
          </div>
        </Card>

        {/* Hospital Performance */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: C.text }}>🏥 Hospital Performance Index</h3>
          <p style={{ fontSize: 11, color: C.muted, marginBottom: 16 }}>Top facilities · national ranking</p>
          {HOSPITAL_DATA.map((h, i) => (
            <div key={h.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < HOSPITAL_DATA.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: i < 2 ? C.primary + "20" : C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: i < 2 ? C.primary : C.muted, flexShrink: 0 }}>#{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ fontWeight: 600, color: C.text }}>{h.name}</span>
                  <span style={{ fontWeight: 700, color: h.performance > 85 ? C.success : h.performance > 75 ? C.warning : C.danger }}>{h.performance}%</span>
                </div>
                <div style={{ fontSize: 10, color: C.muted, marginBottom: 4 }}>{h.region} · {h.doctors} doctors · {h.beds} beds</div>
                <div style={{ height: 6, background: C.bg, borderRadius: 3 }}>
                  <div style={{ width: `${h.performance}%`, height: "100%", borderRadius: 3, background: h.performance > 85 ? C.success : h.performance > 75 ? C.warning : C.danger }} />
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        {/* Outbreak Detection */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: C.text }}>🚨 Outbreak Detection & Alert System</h3>
          <p style={{ fontSize: 11, color: C.muted, marginBottom: 16 }}>Real-time epidemiological monitoring</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { disease: "Cholera", region: "Far North", level: "High", cases: 450, change: "+23%", color: C.danger },
              { disease: "Malaria", region: "North", level: "Medium", cases: 1890, change: "+8%", color: C.warning },
              { disease: "Meningitis", region: "Adamawa", level: "Watch", cases: 34, change: "+15%", color: "#7C3AED" },
            ].map(o => (
              <div key={o.region + o.disease} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 8, border: `1px solid ${o.color}30`, background: o.color + "08" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: o.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>⚠️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{o.disease} — {o.region}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: o.color, background: o.color + "15", padding: "2px 8px", borderRadius: 20 }}>{o.level}</span>
                  </div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Active cases: <strong style={{ color: C.text }}>{o.cases}</strong> · Weekly trend: <strong style={{ color: o.color }}>{o.change}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* National Disease Totals */}
        <Card>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: C.text }}>📊 National Totals</h3>
          <p style={{ fontSize: 11, color: C.muted, marginBottom: 16 }}>All regions combined</p>
          {Object.entries(totalsByDisease).map(([disease, total]) => (
            <div key={disease} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 13, color: C.text, textTransform: "capitalize", fontWeight: 500 }}>{disease}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: disease === "cholera" ? C.danger : disease === "hiv" ? C.warning : C.primary }}>{total.toLocaleString()}</span>
            </div>
          ))}
          <div style={{ marginTop: 16, padding: "10px 12px", background: "#FEF3C7", borderRadius: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#92400E" }}>⚠️ HIGH PRIORITY</div>
            <div style={{ fontSize: 12, color: "#78350F", marginTop: 4 }}>Far North region requires emergency health resources — cholera cases up 23% this week.</div>
          </div>
        </Card>
      </div>
    </div>
  );
};
