import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { HOSPITAL_DATA } from "../Data/hospitalData";

export const FacilitiesPage = () => (
  <div className="animate-in">
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Healthcare Facilities</h2>
      <p style={{ color: C.muted, fontSize: 13 }}>Registered hospitals and health centers — Cameroon</p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {HOSPITAL_DATA.map(h => (
        <Card key={h.name}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 24 }}>🏥</div>
            <span style={{ padding: "4px 10px", borderRadius: 20, background: h.performance > 85 ? "#D1FAE5" : "#FEF3C7", color: h.performance > 85 ? "#065F46" : "#92400E", fontSize: 11, fontWeight: 700 }}>{h.performance}%</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{h.name}</div>
          <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>{h.region} Region</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { label: "Patients", value: h.patients.toLocaleString() },
              { label: "Beds", value: h.beds },
              { label: "Occupancy", value: `${h.occupancy}%` },
              { label: "Doctors", value: h.doctors },
            ].map(s => (
              <div key={s.label} style={{ padding: "8px", background: C.bg, borderRadius: 6 }}>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{s.value}</div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
);
