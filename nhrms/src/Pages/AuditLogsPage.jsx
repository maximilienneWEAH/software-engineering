import DashboardLayout from "../Components/layout/DashbordLayout";

import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";

export const AuditLogsPage = ({
  user,
  onLogout,
}) => (

  <DashboardLayout
    user={user}
    title="Audit Logs"
    onLogout={onLogout}
  >

    <div className="animate-in">

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
          Audit Logs
        </h2>

        <p
          style={{
            color: C.muted,
            fontSize: 13,
          }}
        >
          System activity trail — all user actions recorded
        </p>
      </div>

      <Card
        style={{
          padding: 0,
          overflow: "hidden",
        }}
      >

        <div
          style={{
            padding: "12px 16px",
            background: C.bg,
            display: "flex",
            gap: 12,
            borderBottom: `1px solid ${C.border}`,
          }}
        >

          <input
            placeholder="🔍 Search logs..."
            style={{
              flex: 1,
              padding: "7px 12px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              fontSize: 12,
            }}
          />

          <select
            style={{
              padding: "7px 10px",
              borderRadius: 6,
              border: `1px solid ${C.border}`,
              fontSize: 12,
            }}
          >
            <option>All Actions</option>
            <option>Login</option>
            <option>Data Access</option>
            <option>Modifications</option>
          </select>

        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead>

            <tr
              style={{
                background: "#F8FAFC",
              }}
            >

              {[
                "Timestamp",
                "User",
                "Action",
                "Resource",
                "IP Address",
                "Status",
              ].map((h) => (

                <th
                  key={h}
                  style={{
                    padding: "10px 16px",
                    textAlign: "left",
                    fontSize: 10,
                    fontWeight: 700,
                    color: C.muted,
                    textTransform:
                      "uppercase",
                    letterSpacing:
                      "0.04em",
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >
                  {h}
                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {[
              {
                time: "2025-05-15 09:42:13",
                user:
                  "Dr. Amara Nkolo",
                action: "VIEW",
                resource:
                  "Patient P001 - Records",
                ip:
                  "196.217.12.45",
                status: "Success",
              },

              {
                time: "2025-05-15 09:38:02",
                user:
                  "Nurse Fatima Mbeki",
                action: "UPDATE",
                resource:
                  "Vitals - P002",
                ip:
                  "196.217.12.67",
                status: "Success",
              },

              {
                time: "2025-05-15 09:30:45",
                user:
                  "Kwame Essien",
                action: "CREATE",
                resource:
                  "Lab Result L004",
                ip:
                  "196.217.45.12",
                status: "Success",
              },

              {
                time: "2025-05-15 09:22:00",
                user: "Unknown",
                action: "LOGIN",
                resource:
                  "Auth System",
                ip:
                  "102.45.67.89",
                status: "Failed",
              },

              {
                time: "2025-05-15 09:15:30",
                user:
                  "Admin Celestine Fon",
                action: "DELETE",
                resource:
                  "User Account #458",
                ip:
                  "196.217.1.100",
                status: "Success",
              },

              {
                time: "2025-05-15 08:58:11",
                user:
                  "Dr. Amara Nkolo",
                action: "EXPORT",
                resource:
                  "Patient Report P003",
                ip:
                  "196.217.12.45",
                status: "Success",
              },
            ].map((l, i) => (

              <tr
                key={i}
                style={{
                  background:
                    i % 2 === 0
                      ? "#fff"
                      : "#FAFCFE",
                }}
              >

                <td
                  style={{
                    padding:
                      "10px 16px",
                    fontSize: 11,
                    color: C.muted,
                    fontFamily:
                      "monospace",
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >
                  {l.time}
                </td>

                <td
                  style={{
                    padding:
                      "10px 16px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.text,
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >
                  {l.user}
                </td>

                <td
                  style={{
                    padding:
                      "10px 16px",
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >

                  <span
                    style={{
                      fontSize: 10,
                      padding:
                        "2px 8px",
                      borderRadius: 4,
                      background:
                        l.action ===
                        "DELETE"
                          ? "#FEE2E2"
                          : l.action ===
                            "CREATE"
                          ? "#D1FAE5"
                          : l.action ===
                            "UPDATE"
                          ? "#DBEAFE"
                          : "#F3F4F6",
                      color:
                        l.action ===
                        "DELETE"
                          ? "#991B1B"
                          : l.action ===
                            "CREATE"
                          ? "#065F46"
                          : l.action ===
                            "UPDATE"
                          ? "#1E40AF"
                          : "#374151",
                      fontWeight: 700,
                    }}
                  >
                    {l.action}
                  </span>

                </td>

                <td
                  style={{
                    padding:
                      "10px 16px",
                    fontSize: 12,
                    color: C.text,
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >
                  {l.resource}
                </td>

                <td
                  style={{
                    padding:
                      "10px 16px",
                    fontSize: 11,
                    color: C.muted,
                    fontFamily:
                      "monospace",
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >
                  {l.ip}
                </td>

                <td
                  style={{
                    padding:
                      "10px 16px",
                    borderBottom:
                      `1px solid ${C.border}`,
                  }}
                >

                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color:
                        l.status ===
                        "Success"
                          ? C.success
                          : C.danger,
                    }}
                  >
                    {l.status ===
                    "Success"
                      ? "✓"
                      : "✗"}{" "}
                    {l.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </Card>

    </div>

  </DashboardLayout>
);

export default AuditLogsPage;