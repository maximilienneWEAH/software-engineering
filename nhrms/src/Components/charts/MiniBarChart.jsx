import { C } from "../../Styles/theme";
export const MiniBarChart = ({ data, color = C.primary, height = 60 }) => {
  const max = Math.max(...data.map(d => d.value));
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${data.length * 28} ${height}`} preserveAspectRatio="none">
      {data.map((d, i) => {
        const barH = (d.value / max) * (height - 20);
        return (
          <g key={i}>
            <rect x={i * 28 + 4} y={height - barH - 16} width={20} height={barH} rx={3} fill={color} opacity={0.8} />
            <text x={i * 28 + 14} y={height - 2} fontSize={8} textAnchor="middle" fill={C.muted}>{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
};
export default MiniBarChart;