import { useState } from "react";
import DashboardLayout from "../Components/layout/DashbordLayout";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { StatusBadge } from "../Components/layout/StatusBadge";
import { MOCK_PATIENTS } from "../Data/patients";

export const ReferralsPage = () => {
  const [form, setForm] = useState({
    patient: "",
    from: "",
    to: "",
    reason: "",
    priority: "Standard",
  });

  const testUser = {
    name: "Test Doctor",
    role: "doctor",
    avatar: "TD",
  };

  return (
    <DashboardLayout
      user={testUser}
      onLogout={() => console.log("Logout")}
    >
      <div className="animate-in">
        <div style={{ marginBottom: 20 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: C.text,
            }}
          >
            Referral System
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
            }}
          >
            Inter-facility patient referrals
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {/* Create Referral */}
          <Card>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Create New Referral
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                {
                  key: "patient",
                  label: "Patient",
                  type: "select",
                },
                {
                  key: "from",
                  label: "Referring Facility",
                  placeholder: "e.g. Yaoundé Central Hospital",
                },
                {
                  key: "to",
                  label: "Receiving Facility",
                  placeholder: "e.g. Douala General Hospital",
                },
                {
                  key: "reason",
                  label: "Reason for Referral",
                  placeholder: "Clinical indication...",
                },
              ].map((f) => (
                <div key={f.key}>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.muted,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {f.label}
                  </label>

                  {f.type === "select" ? (
                    <select
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [f.key]: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: 8,
                        border: `1px solid ${C.border}`,
                        fontSize: 13,
                      }}
                    >
                      <option value="">
                        -- Select patient --
                      </option>

                      {MOCK_PATIENTS.map((p) => (
                        <option
                          key={p.id}
                          value={p.id}
                        >
                          {p.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [f.key]: e.target.value,
                        })
                      }
                      placeholder={f.placeholder}
                      style={{
                        width: "100%",
                        padding: "9px 12px",
                        borderRadius: 8,
                        border: `1px solid ${C.border}`,
                        fontSize: 13,
                      }}
                    />
                  )}
                </div>
              ))}

              <div>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.muted,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Priority
                </label>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                  }}
                >
                  {[
                    "Standard",
                    "Urgent",
                    "Emergency",
                  ].map((p) => (
                    <button
                      key={p}
                      onClick={() =>
                        setForm({
                          ...form,
                          priority: p,
                        })
                      }
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: 8,
                        border: `2px solid ${
                          form.priority === p
                            ? C.primary
                            : C.border
                        }`,
                        background:
                          form.priority === p
                            ? C.primary + "12"
                            : "#fff",
                        color:
                          form.priority === p
                            ? C.primary
                            : C.text,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <button
                style={{
                  padding: "10px",
                  borderRadius: 8,
                  background: C.primary,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit Referral
              </button>
            </div>
          </Card>

          {/* Recent Referrals */}
          <Card>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Recent Referrals
            </h3>

            {[
              {
                patient: "Grace Ndong",
                from: "Yaoundé Central",
                to: "Douala General",
                reason: "Specialized pulmonology",
                priority: "Urgent",
                date: "2025-05-14",
              },
              {
                patient: "Pierre Atangana",
                from: "Garoua District",
                to: "Maroua General",
                reason: "Cholera management unit",
                priority: "Emergency",
                date: "2025-05-13",
              },
              {
                patient: "Emmanuel Tabi",
                from: "Bafoussam Regional",
                to: "Yaoundé Central",
                reason: "Endocrinology specialist",
                priority: "Standard",
                date: "2025-05-11",
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    {r.patient}
                  </span>

                  <StatusBadge
                    status={r.priority}
                  />
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: C.muted,
                  }}
                >
                  {r.from} → {r.to}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: C.text,
                    marginTop: 2,
                  }}
                >
                  {r.reason}
                </div>

                <div
                  style={{
                    fontSize: 10,
                    color: C.muted,
                    marginTop: 2,
                  }}
                >
                  {r.date}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReferralsPage;