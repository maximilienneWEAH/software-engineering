import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function RoleRedirect() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  switch (user.role) {
    case "doctor":
      return <Navigate to="/doctor" />;

    case "nurse":
      return <Navigate to="/nurse" />;

    case "lab":
      return <Navigate to="/lab" />;

    case "admin":
      return <Navigate to="/admin" />;

    default:
      return <Navigate to="/" />;
  }
}