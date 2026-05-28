import Card from "./Card";
import { C } from "../../Styles/theme";
export const StatCard = ({ label, value, icon, color = C.primary, trend }) => (
  <Card style={{ padding: "18px 20px" }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
        {icon}
      </div>
    </div>
    <div style={{ fontSize: 26, fontWeight: 700, color: C.text, lineHeight: 1 }}>{value}</div>
    {trend && <div style={{ fontSize: 12, color: trend > 0 ? C.success : C.danger, marginTop: 6, fontWeight: 500 }}>
      {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% from last month
    </div>}
  </Card>
);
export default StatCard;