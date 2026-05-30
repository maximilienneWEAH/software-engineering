import DashboardLayout from "../Components/layout/DashbordLayout";
import Card from "../Components/layout/Card";
import { C } from "../Styles/theme";
// import { StatusBadge } from "../Components/layout/StatusBadge";
import { MOCK_PATIENTS } from "../Data/patients";

export const MedicalRecordsPage = () => {
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
            Medical Records
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 13,
            }}
          >
            Patient electronic health records
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 16,
          }}
        >
          {/* Patient List */}
          <Card>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Select Patient
            </h3>

            {MOCK_PATIENTS.map((p) => (
              <div
                key={p.id}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  marginBottom: 4,
                  cursor: "pointer",
                  background:
                    p.id === "P001"
                      ? C.primary + "12"
                      : "transparent",
                  border: `1px solid ${
                    p.id === "P001"
                      ? C.primary + "40"
                      : "transparent"
                  }`,
                }}
                onMouseEnter={(e) => {
                  if (p.id !== "P001") {
                    e.currentTarget.style.background = C.bg;
                  }
                }}
                onMouseLeave={(e) => {
                  if (p.id !== "P001") {
                    e.currentTarget.style.background =
                      "transparent";
                  }
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
                  }}
                >
                  {p.id} · {p.condition}
                </div>
              </div>
            ))}
          </Card>

          {/* Medical Record Details */}
          <Card>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Jean-Baptiste Manga — Medical Record
            </h3>

            <p
              style={{
                fontSize: 11,
                color: C.muted,
                marginBottom: 16,
              }}
            >
              P001 · Blood Group: O+ · DOB: 1985-03-12
            </p>

            {[
              {
                date: "2025-05-10",
                type: "Consultation",
                doctor: "Dr. Amara Nkolo",
                note:
                  "Patient presented with elevated BP (150/95). Prescribed Amlodipine 5mg daily. Lifestyle modification advised.",
              },
              {
                date: "2025-04-15",
                type: "Lab Review",
                doctor: "Dr. Amara Nkolo",
                note:
                  "CBC results reviewed. All parameters within normal range. HbA1c slightly elevated at 6.4% — pre-diabetic watch.",
              },
              {
                date: "2025-03-01",
                type: "Emergency Visit",
                doctor: "Dr. Tabi Eko",
                note:
                  "Chest discomfort. ECG performed — no arrhythmia detected. BP: 160/100. Medication adjusted.",
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: C.primary,
                    }}
                  >
                    {r.type}
                  </span>

                  <span
                    style={{
                      fontSize: 11,
                      color: C.muted,
                    }}
                  >
                    {r.date}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    marginBottom: 4,
                  }}
                >
                  {r.doctor}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: C.text,
                    lineHeight: 1.6,
                  }}
                >
                  {r.note}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MedicalRecordsPage;