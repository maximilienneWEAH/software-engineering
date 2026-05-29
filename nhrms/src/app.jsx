import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import DoctorDashboard from "./Dashboards/DoctorDashboard";
import NurseDashboard from "./Dashboards/NurseDashboard";
import AdminDashboard from "./Dashboards/AdminDashboard";
import MinistryDashboard from "./Dashboards/MinistryDashboard";
import PatientDashboard from "./Dashboards/PatientDashboard";
import { LabTechDashboard } from "./Dashboards/LabTechDashboard";



function App() {
  const [user, setUser] = useState(null);

  // LOGIN HANDLER
  const handleLogin = (loggedInUser) => {
    console.log("Logged in user:", loggedInUser);

    setUser(loggedInUser);
  };

  // LOGOUT HANDLER
  const handleLogout = () => {
    setUser(null);
  };

  // NOT LOGGED IN
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // ROLE-BASED ROUTING
  switch (user.role) {
    case "doctor":
      return (
        <DoctorDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    case "nurse":
      return (
        <NurseDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    case "lab_tech":
      return (
        <LabTechDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    case "admin":
      return (
        <AdminDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    case "ministry":
      return (
        <MinistryDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    case "patient":
      return (
        <PatientDashboard
          user={user}
          onLogout={handleLogout}
        />
      );

    default:
      return <LoginPage onLogin={handleLogin} />;
  }
}

export default App;

