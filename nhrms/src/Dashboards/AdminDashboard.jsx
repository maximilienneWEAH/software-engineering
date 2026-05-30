import DashboardLayout from "../Components/layout/DashbordLayout";

import Card from "../Components/layout/Card";
import { StatCard } from "../Components/layout/StatCard";

import { C } from "../Styles/theme";

export const AdminDashboard = ({
  user,
  onLogout,
}) => {

  return (
    <DashboardLayout
      user={user}
      title="Admin Dashboard"
      onLogout={onLogout}
    >

      <div className="animate-in">

        {/* PAGE HEADER */}
        <div
          style={{
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: C.text,
            }}
          >
            System Administration
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
              marginTop: 4,
            }}
          >
            National NHRMS Control Panel
          </p>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(4, 1fr)",

            gap: 16,

            marginBottom: 24,
          }}
        >

          <StatCard
            label="Total Users"
            value="2,847"
            icon="👥"
            color={C.primary}
            trend={12}
          />

          <StatCard
            label="Hospitals"
            value="312"
            icon="🏥"
            color={C.info}
          />

          <StatCard
            label="Active Sessions"
            value="148"
            icon="🖥️"
            color={C.success}
          />

          <StatCard
            label="System Alerts"
            value="5"
            icon="⚠️"
            color={C.warning}
          />
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "2fr 1fr",

            gap: 16,
          }}
        >

          {/* SYSTEM HEALTH */}
          <Card>

            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 18,
                color: C.text,
              }}
            >
              System Health & Monitoring
            </h3>

            {[
              {
                label: "Database",
                value: 92,
                color: C.success,
                detail:
                  "MongoDB · 2.1TB used",
              },

              {
                label: "API Gateway",
                value: 78,
                color: C.info,
                detail:
                  "256ms avg response",
              },

              {
                label: "File Storage",
                value: 54,
                color: C.primary,
                detail:
                  "8.7TB / 16TB",
              },

              {
                label: "Backup",
                value: 100,
                color: C.success,
                detail:
                  "Last: 2h ago",
              },
            ].map((s) => (
              <div
                key={s.label}

                style={{
                  marginBottom: 18,
                }}
              >

                {/* TOP */}
                <div
                  style={{
                    display: "flex",

                    justifyContent:
                      "space-between",

                    marginBottom: 6,

                    alignItems: "center",
                  }}
                >

                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.text,
                    }}
                  >
                    {s.label}
                  </span>

                  <span
                    style={{
                      fontSize: 11,
                      color: C.muted,
                    }}
                  >
                    {s.detail}
                  </span>
                </div>

                {/* BAR */}
                <div
                  style={{
                    height: 8,

                    background: C.bg,

                    borderRadius: 10,

                    overflow: "hidden",
                  }}
                >

                  <div
                    style={{
                      width: `${s.value}%`,

                      height: "100%",

                      borderRadius: 10,

                      background: s.color,

                      transition:
                        "width 0.3s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </Card>

          {/* USER DISTRIBUTION */}
          <Card>

            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
                color: C.text,
              }}
            >
              User Roles Distribution
            </h3>

            {[
              {
                role: "Doctors",
                count: 840,
                icon: "👨‍⚕️",
              },

              {
                role: "Nurses",
                count: 1240,
                icon: "👩‍⚕️",
              },

              {
                role: "Lab Techs",
                count: 320,
                icon: "🔬",
              },

              {
                role: "Admins",
                count: 45,
                icon: "⚙️",
              },

              {
                role: "Patients",
                count: 12400,
                icon: "👥",
              },
            ].map((r) => (
              <div
                key={r.role}

                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",

                  padding: "10px 0",

                  borderBottom:
                    `1px solid ${C.border}`,
                }}
              >

                {/* ROLE */}
                <span
                  style={{
                    fontSize: 13,
                    color: C.text,
                    fontWeight: 500,
                  }}
                >
                  {r.icon} {r.role}
                </span>

                {/* COUNT */}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.primary,
                  }}
                >
                  {r.count.toLocaleString()}
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

