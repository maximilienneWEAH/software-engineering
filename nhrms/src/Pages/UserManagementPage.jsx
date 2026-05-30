import DashboardLayout from "../Components/layout/DashbordLayout";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { USERS } from "../Data/user";
import { StatusBadge } from "../Components/layout/StatusBadge";

export const UserManagementPage = ({ user, onLogout }) => {
  return (
    <DashboardLayout user={user} onLogout={onLogout}>
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
              User Management
            </h2>

            <p
              style={{
                color: C.muted,
                fontSize: 13,
              }}
            >
              System users and role assignments
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
            + Add User
          </button>
        </div>

        <Card
          style={{
            padding: 0,
            overflow: "hidden",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: C.bg,
                }}
              >
                {[
                  "Name",
                  "Email",
                  "Role",
                  "Region/Dept",
                  "Status",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.muted,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {USERS.map((u, i) => (
                <tr
                  key={u.id}
                  style={{
                    background:
                      i % 2 === 0 ? "#fff" : "#FAFCFE",
                  }}
                >
                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: C.primary,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {u.avatar}
                      </div>

                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: C.text,
                        }}
                      >
                        {u.name}
                      </span>
                    </div>
                  </td>

                  <td
                    style={{
                      padding: "12px 16px",
                      fontSize: 12,
                      color: C.muted,
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {u.email}
                  </td>

                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 20,
                        background: C.primary + "15",
                        color: C.primary,
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {u.role.replace("_", " ")}
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "12px 16px",
                      fontSize: 12,
                      color: C.text,
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    {u.region || u.ward || "—"}
                  </td>

                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <StatusBadge status="Active" />
                  </td>

                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                      }}
                    >
                      <button
                        style={{
                          padding: "5px 10px",
                          borderRadius: 6,
                          background: C.primary + "15",
                          color: C.primary,
                          fontSize: 11,
                          fontWeight: 600,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        style={{
                          padding: "5px 10px",
                          borderRadius: 6,
                          background: "#FEE2E2",
                          color: "#991B1B",
                          fontSize: 11,
                          fontWeight: 600,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Revoke
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default UserManagementPage;