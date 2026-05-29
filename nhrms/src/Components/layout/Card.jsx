import { C } from "../../Styles/theme";

export default function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: C.card,
        borderRadius: 12,
        padding: "20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}