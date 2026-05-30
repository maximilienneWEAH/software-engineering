import { useState } from "react";

import DashboardLayout from "../Components/layout/DashbordLayout";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
import { MOCK_PATIENTS } from "../Data/patients";
import { StatusBadge } from "../Components/layout/StatusBadge";

export const PatientsPage = ({
  user,
  onLogout,
}) => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = MOCK_PATIENTS.filter(
    (p) =>
      (filter === "All" ||
        p.status === filter) &&
      (
        p.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        p.id.includes(search)
      )
  );

  return (
    <DashboardLayout
      user={user}
      title="Patient Management"
      onLogout={onLogout}
    >
      <div className="animate-in">

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
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
              Patient Management
            </h2>

            <p
              style={{
                color: C.muted,
                fontSize: 13,
              }}
            >
              {MOCK_PATIENTS.length}
              {" "}
              patients registered
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
            + New Patient
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <Card
          style={{
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="🔍 Search patient name or ID..."
              style={{
                flex: 1,
                minWidth: 250,
                padding: "9px 14px",
                borderRadius: 8,
                border: `1px solid ${C.border}`,
                fontSize: 13,
              }}
            />

            {[
              "All",
              "Active",
              "Critical",
              "Recovered",
              "Quarantine",
            ].map((f) => (
              <button
                key={f}
                onClick={() =>
                  setFilter(f)
                }
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: `1px solid ${
                    filter === f
                      ? C.primary
                      : C.border
                  }`,
                  background:
                    filter === f
                      ? C.primary
                      : "#fff",
                  color:
                    filter === f
                      ? "#fff"
                      : C.text,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </Card>

        {/* TABLE */}
        <Card
          style={{
            padding: 0,
            overflow: "hidden",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse:
                "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    C.bg,
                }}
              >
                {[
                  "Patient ID",
                  "Name",
                  "Age",
                  "Gender",
                  "Region",
                  "Condition",
                  "Status",
                  "Last Visit",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding:
                        "12px 16px",
                      textAlign:
                        "left",
                      fontSize: 11,
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
              {filtered.map(
                (p, i) => (
                  <tr
                    key={p.id}
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
                          "12px 16px",
                        fontSize: 12,
                        fontWeight: 600,
                        color:
                          C.primary,
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.id}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        fontSize: 13,
                        fontWeight: 600,
                        color:
                          C.text,
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      <div
                        style={{
                          display:
                            "flex",
                          alignItems:
                            "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius:
                              "50%",
                            background:
                              C.primary +
                              "20",
                            display:
                              "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            fontSize: 11,
                            fontWeight: 700,
                            color:
                              C.primary,
                          }}
                        >
                          {p.name
                            .split(
                              " "
                            )
                            .map(
                              (n) =>
                                n[0]
                            )
                            .join("")
                            .slice(
                              0,
                              2
                            )}
                        </div>

                        {p.name}
                      </div>
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.age}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.gender}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.region}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.condition}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      <StatusBadge
                        status={
                          p.status
                        }
                      />
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        fontSize: 12,
                        color:
                          C.muted,
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      {p.lastVisit}
                    </td>

                    <td
                      style={{
                        padding:
                          "12px 16px",
                        borderBottom:
                          `1px solid ${C.border}`,
                      }}
                    >
                      <button
                        style={{
                          padding:
                            "5px 10px",
                          borderRadius:
                            6,
                          background:
                            C.primary +
                            "15",
                          color:
                            C.primary,
                          fontSize: 11,
                          fontWeight: 600,
                          border:
                            "none",
                          cursor:
                            "pointer",
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {filtered.length ===
            0 && (
            <div
              style={{
                padding: 40,
                textAlign:
                  "center",
                color: C.muted,
              }}
            >
              No patients found
              matching your
              search.
            </div>
          )}
        </Card>

      </div>
    </DashboardLayout>
  );
};

export default PatientsPage;