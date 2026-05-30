import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* LOGIN */
import LoginPage from "./Pages/LoginPage";

/* DASHBOARDS */
import DoctorDashboard from "./Dashboards/DoctorDashboard";
import NurseDashboard from "./Dashboards/NurseDashboard";
import AdminDashboard from "./Dashboards/AdminDashboard";
import MinistryDashboard from "./Dashboards/MinistryDashboard";
import PatientDashboard from "./Dashboards/PatientDashboard";
import { LabTechDashboard } from "./Dashboards/LabTechDashboard";
import PatientsPage from "./Pages/PatientPage";
/* PAGES */
import LabResultsPage from "./Pages/LabResultsPage";
import AppointmentsPage from "./Pages/AppointmentsPage";
import MedicalRecordsPage from "./Pages/MedicalRecordsPage";
import ReferralsPage from "./Pages/ReferalPage";
import ReportsPage from "./Pages/ReportsPage";
import FacilitiesPage from "./Pages/FacilitiesPAge";
import UserManagementPage from "./Pages/UserManagementPage"; 
import AIChatPage from "./Pages/AIChartPage";
import AuditLogsPage from "./Pages/AuditLogsPage";
import SettingsPage from "./Pages/SettingsPage";

function App() {

  const [user, setUser] = useState(null);

  /* LOGIN */
  const handleLogin = (loggedInUser) => {

    console.log(
      "Logged in user:",
      loggedInUser
    );

    setUser(loggedInUser);
  };

  /* LOGOUT */
  const handleLogout = () => {

    setUser(null);
  };

  return (

    <BrowserRouter>

      {/* NOT LOGGED IN */}
      {!user ? (

        <LoginPage
          onLogin={handleLogin}
        />

      ) : (

        <Routes>

          {/* DEFAULT ROUTE */}
          <Route
            path="/"
            element={
              <Navigate to="/dashboard" />
            }
          />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              user.role === "doctor" ? (

                <DoctorDashboard
                  user={user}
                  onLogout={handleLogout}
                />

              ) : user.role === "nurse" ? (

                <NurseDashboard
                  user={user}
                  onLogout={handleLogout}
                />

              ) : user.role === "lab_tech" ? (

                <LabTechDashboard
                  user={user}
                  onLogout={handleLogout}
                />

              ) : user.role === "admin" ? (

                <AdminDashboard
                  user={user}
                  onLogout={handleLogout}
                />

              ) : user.role === "ministry" ? (
 
                <MinistryDashboard
                  user={user}
                  onLogout={handleLogout}
                />

              ) : (

                <PatientDashboard
                  user={user}
                  onLogout={handleLogout}
                />
              )
            }
          />

          {/* PATIENTS */}
          <Route
            path="/patients"
            element={
              <PatientsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />       
 

          {/* APPOINTMENTS */}
          <Route
            path="/appointments"
            element={
              <AppointmentsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* LAB RESULTS */}
          <Route
            path="/lab_results"
            element={
              <LabResultsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* MEDICAL RECORDS */}
          <Route
            path="/medical_records"
            element={
              <MedicalRecordsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* REFERRALS */}
          <Route
            path="/referrals"
            element={
              <ReferralsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* FACILITIES */}
          <Route
            path="/facilities"
            element={
              <FacilitiesPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* USER MANAGEMENT */}
          <Route
            path="/user_management"
            element={
              <UserManagementPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* MINISTRY DASHBOARD */}
          <Route
            path="/ministry_dashboard"
            element={
              <MinistryDashboard
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* AI CHAT */}
          <Route
            path="/ai_chat"
            element={
              <AIChatPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* REPORTS */}
          <Route
            path="/reports"
            element={
              <ReportsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* AUDIT LOGS */}
          <Route
            path="/audit_logs"
            element={
              <AuditLogsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* SETTINGS */}
          <Route
            path="/settings"
            element={
              <SettingsPage
                user={user}
                onLogout={handleLogout}
              />
            }
          />

          {/* UNKNOWN ROUTES */}
          <Route
            path="*"
            element={
              <Navigate to="/dashboard" />
            }
          />

        </Routes>
      )}

    </BrowserRouter>
  );
}

export default App;