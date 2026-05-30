import DashboardLayout from "../Components/layout/DashbordLayout";
import Card from "../Components/layout/Card";
import { StatCard } from "../Components/layout/StatCard";
import { StatusBadge } from "../Components/layout/StatusBadge";

import { MiniBarChart } from "../Components/charts/MiniBarChart";

import { MOCK_PATIENTS } from "../Data/patients";
import { MOCK_APPOINTMENTS } from "../Data/appointments";

import { C } from "../Styles/theme";

export const DoctorDashboard = ({
  user,
  onLogout,
}) => {

  const today =
    new Date().toLocaleDateString("en-GB");

  return (
    <DashboardLayout
      user={user}
      title="Doctor Dashboard"
      onLogout={onLogout}
    >

      <div className="animate-in">

        {/* HEADER */}
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
            Welcome, {user.name}
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
              marginTop: 4,
            }}
          >
            {user.specialization}
            {" · "}
            {user.hospital}
            {" · "}
            {today}
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
            label="My Patients"
            value="24"
            icon="👥"
            color={C.primary}
            trend={8}
          />

          <StatCard
            label="Today's Appointments"
            value="6"
            icon="📅"
            color={C.info}
            trend={-2}
          />

          <StatCard
            label="Pending Lab Results"
            value="3"
            icon="🔬"
            color={C.warning}
          />

          <StatCard
            label="Critical Cases"
            value="1"
            icon="🚨"
            color={C.danger}
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

          {/* APPOINTMENTS */}
          <Card>

            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
                color: C.text,
              }}
            >
              Today's Appointments
            </h3>

            {MOCK_APPOINTMENTS.map((a) => (
              <div
                key={a.id}

                style={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",

                  padding: "12px 0",

                  borderBottom:
                    `1px solid ${C.border}`,
                }}
              >

                {/* LEFT */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >

                  {/* AVATAR */}
                  <div
                    style={{
                      width: 36,
                      height: 36,

                      borderRadius: "50%",

                      background:
                        C.primary + "20",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      fontSize: 14,
                    }}
                  >
                    👤
                  </div>

                  {/* INFO */}
                  <div>

                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: C.text,
                      }}
                    >
                      {a.patient}
                    </div>

                    <div
                      style={{
                        fontSize: 11,
                        color: C.muted,
                      }}
                    >
                      {a.time}
                      {" · "}
                      {a.type}
                    </div>
                  </div>
                </div>

                {/* STATUS */}
                <StatusBadge
                  status={a.status}
                />
              </div>
            ))}
          </Card>

          {/* RIGHT PANEL */}
          <Card>

            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
                color: C.text,
              }}
            >
              Critical Watch
            </h3>

            {MOCK_PATIENTS
              .filter(
                (p) =>
                  p.status === "Critical" ||
                  p.status === "Quarantine"
              )
              .map((p) => (
                <div
                  key={p.id}

                  style={{
                    padding: "10px 0",

                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >

                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.text,
                    }}
                  >
                    {p.name}
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      color: C.muted,
                      marginTop: 2,
                    }}
                  >
                    {p.condition}
                  </div>

                  <div
                    style={{
                      marginTop: 6,
                    }}
                  >
                    <StatusBadge
                      status={p.status}
                    />
                  </div>
                </div>
              ))}

            {/* CHART */}
            <div
              style={{
                padding: "12px 0",
              }}
            >

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.text,
                }}
              >
                Patient Volume (Weekly)
              </div>

              <div
                style={{
                  marginTop: 10,
                }}
              >

                <MiniBarChart
                  data={[
                    {
                      label: "Mon",
                      value: 8,
                    },

                    {
                      label: "Tue",
                      value: 12,
                    },

                    {
                      label: "Wed",
                      value: 6,
                    },

                    {
                      label: "Thu",
                      value: 15,
                    },

                    {
                      label: "Fri",
                      value: 9,
                    },

                    {
                      label: "Sat",
                      value: 4,
                    },
                  ]}

                  color={C.primary}

                  height={70}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;

