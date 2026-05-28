
export const StatusBadge = ({ status }) => {
  const map = {
    Active: { bg: "#D1FAE5", color: "#065F46" },
    Recovered: { bg: "#DBEAFE", color: "#1E40AF" },
    Critical: { bg: "#FEE2E2", color: "#991B1B" },
    Quarantine: { bg: "#FEF3C7", color: "#92400E" },
    Normal: { bg: "#D1FAE5", color: "#065F46" },
    Abnormal: { bg: "#FEF3C7", color: "#92400E" },
    Pending: { bg: "#EDE9FE", color: "#4C1D95" },
    Confirmed: { bg: "#D1FAE5", color: "#065F46" },
    Urgent: { bg: "#FEE2E2", color: "#991B1B" },
    Cancelled: { bg: "#F3F4F6", color: "#374151" },
  };
  const s = map[status] || { bg: "#F3F4F6", color: "#374151" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
      background: s.bg, color: s.color, letterSpacing: "0.02em",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color }} />
      {status}
    </span>
  );
};
export default StatusBadge;