import DashboardLayout from "../Components/layout/DashbordLayout";

import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { MOCK_APPOINTMENTS } from "../Data/appointments";
import { StatusBadge } from "../Components/layout/StatusBadge";

export const AppointmentsPage = ({
  user,
  onLogout,
}) => (

  <DashboardLayout
    user={user}
    title="Appointments"
    onLogout={onLogout}
  >

    <div className="animate-in">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >

        <div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: C.text,
            }}
          >
            Appointments
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
            }}
          >
            Schedule and manage patient appointments
          </p>
        </div>

        <button
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            background: C.primary,
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          + Book Appointment
        </button>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, 1fr)",
          gap: 16,
        }}
      >

        {MOCK_APPOINTMENTS.map((a) => (

          <Card
            key={a.id}
            style={{
              padding: "16px 20px",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "flex-start",
              }}
            >

              <div
                style={{
                  display: "flex",
                  gap: 12,
                }}
              >

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background:
                      C.primary +
                      "15",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontSize: 20,
                  }}
                >
                  📅
                </div>

                <div>

                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    {a.patient}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: C.muted,
                    }}
                  >
                    {a.doctor}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: C.primary,
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {a.date} · {a.time}
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      color: C.muted,
                    }}
                  >
                    {a.type}
                  </div>

                </div>
              </div>

              <StatusBadge
                status={a.status}
              />

            </div>

          </Card>

        ))}

      </div>

    </div>

  </DashboardLayout>
);

export default AppointmentsPage;