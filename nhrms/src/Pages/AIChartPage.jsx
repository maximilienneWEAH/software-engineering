import { useState, useEffect, useRef } from "react";
import { C } from "../Styles/theme";

 const AI_RESPONSES = {
  fever: {
    reply: "Based on your symptoms of **fever and headache**, here are some possibilities:\n\n**Possible causes:**\n• Malaria (very common in Cameroon — test recommended urgently)\n• Typhoid fever\n• Viral infection (flu, dengue)\n• Bacterial meningitis (if headache is severe)\n\n**Urgency Level:** 🟡 Moderate — seek care within 24 hours\n\n**Immediate advice:**\n• Stay hydrated — drink plenty of clean water\n• Rest and avoid physical exertion\n• Take paracetamol for fever (avoid aspirin)\n• Do NOT self-medicate with antibiotics\n\n**⚠️ Go to ER immediately if:** fever exceeds 39.5°C, severe headache with stiff neck, confusion, or rash appears.",
    urgency: "Moderate"
  },
  blood_pressure: {
    reply: "**High blood pressure (Hypertension) guidance:**\n\n**Understanding your readings:**\n• Normal: below 120/80 mmHg\n• Elevated: 120-129 / below 80\n• Stage 1 HBP: 130-139 / 80-89\n• Stage 2 HBP: 140+ / 90+\n• Crisis: 180+ / 120+\n\n**Lifestyle recommendations:**\n• Reduce salt intake significantly\n• Exercise 30 minutes daily (walking, swimming)\n• Avoid alcohol and smoking\n• Manage stress through relaxation techniques\n• Maintain healthy weight\n\n**Urgency Level:** 🟡 If consistently high, schedule appointment within 1 week\n\n**⚠️ Emergency:** If BP is 180/120+ with chest pain or difficulty breathing, go to ER immediately.",
    urgency: "Low-Moderate"
  },
  lab: {
    reply: "**Understanding your lab results — CBC (Complete Blood Count):**\n\n**Your values in simple terms:**\n• **WBC (White Blood Cells):** 7.2 K/µL ✅ Normal — Your immune system is functioning well\n• **RBC (Red Blood Cells):** 4.8 M/µL ✅ Normal — Good oxygen-carrying capacity\n• **Hemoglobin:** 14.5 g/dL ✅ Normal — No anemia detected\n• **Platelets:** 220 K/µL ✅ Normal — Blood clotting ability is fine\n\n**What this means:** Your blood health appears good! All values are within normal ranges.\n\n**Recommendations:**\n• Maintain balanced diet rich in iron and vitamins\n• Stay hydrated\n• Follow up with your doctor in 3-6 months\n• Continue any prescribed medications",
    urgency: "Low"
  },
  malaria: {
    reply: "**Malaria information for Cameroon:**\n\nMalaria is caused by Plasmodium parasites transmitted by Anopheles mosquitoes.\n\n**Common symptoms:**\n• High fever (often cyclical — every 48-72 hours)\n• Chills and sweating\n• Headache and body aches\n• Fatigue and nausea\n• Vomiting\n\n**Urgency Level:** 🔴 High — Test and treat immediately\n\n**What to do NOW:**\n1. Visit nearest health facility for Rapid Diagnostic Test (RDT)\n2. Do NOT start treatment without confirmed diagnosis\n3. If positive, a doctor will prescribe Artemisinin-based therapy (ACT)\n\n**Prevention:**\n• Sleep under insecticide-treated nets\n• Use mosquito repellent\n• Eliminate standing water near home\n• Consider prophylaxis if traveling to high-risk areas\n\n**⚠️ Severe malaria** (seizures, unconsciousness, difficulty breathing) = Medical Emergency",
    urgency: "High"
  },
  default: {
    reply: "Hello! I'm your **AI Health Assistant** for NHRMS Cameroon. I can help you with:\n\n🩺 **Symptom guidance** — describe your symptoms\n📋 **Lab result explanations** — paste your values\n💊 **Medication information** — ask about drugs\n🏥 **When to seek care** — urgency assessment\n🌿 **Wellness & prevention tips**\n\n**Try asking me:**\n• \"I have fever and headache\"\n• \"Explain my CBC lab result\"\n• \"What should I do for high blood pressure?\"\n• \"Tell me about malaria\"\n\n⚠️ *This AI provides general health information only and does not replace professional medical diagnosis. Always consult a qualified healthcare provider for medical decisions.*",
    urgency: null
  }
};

const getAIResponse = (msg) => {
  const lower = msg.toLowerCase();
  if (lower.includes("fever") || lower.includes("headache") || lower.includes("temperature")) return AI_RESPONSES.fever;
  if (lower.includes("blood pressure") || lower.includes("hypertension") || lower.includes("bp")) return AI_RESPONSES.blood_pressure;
  if (lower.includes("lab") || lower.includes("result") || lower.includes("cbc") || lower.includes("blood test")) return AI_RESPONSES.lab;
  if (lower.includes("malaria") || lower.includes("mosquito") || lower.includes("paludisme")) return AI_RESPONSES.malaria;
  return AI_RESPONSES.default;
};

const formatMessage = (text) => {
  return text.split('\n').map((line, i) => {
    const bold = line.replace(/\*\*(.*?)\*\*/g, (_, m) => `<strong>${m}</strong>`);
    return <div key={i} style={{ marginBottom: line === "" ? 8 : 2 }} dangerouslySetInnerHTML={{ __html: bold }} />;
  });
};

export const AIChatPage = ({ user }) => {
  const [messages, setMessages] = useState([
    { id: 1, role: "ai", text: AI_RESPONSES.default.reply, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { id: Date.now(), role: "user", text: input, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) };
    const userInput = input;
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Call Anthropic API
    try {
      const systemPrompt = `You are an AI Health Assistant for NHRMS (National Health Records Management System) in Cameroon. 
You help patients, doctors, nurses, and health workers with:
- Symptom assessment and possible causes (not definitive diagnosis)
- Lab result explanations in simple language
- Urgency level suggestions (Low/Moderate/High/Emergency)
- Lifestyle and wellness recommendations
- When to seek hospital care
- Information about diseases common in Cameroon (malaria, cholera, typhoid, etc.)

IMPORTANT: Always clarify you cannot provide definitive medical diagnosis. Keep responses clear, concise, and helpful. Use emojis sparingly for urgency levels. The user's role is: ${user.role}.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: userInput }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiText = data.content?.[0]?.text || "I'm sorry, I couldn't process that request. Please try again.";
        setMessages(prev => [...prev, {
          id: Date.now() + 1, role: "ai", text: aiText,
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
        }]);
      } else {
        // Fallback to mock
        const resp = getAIResponse(userInput);
        setMessages(prev => [...prev, {
          id: Date.now() + 1, role: "ai", text: resp.reply, urgency: resp.urgency,
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
        }]);
      }
    } catch {
      const resp = getAIResponse(userInput);
      setMessages(prev => [...prev, {
        id: Date.now() + 1, role: "ai", text: resp.reply, urgency: resp.urgency,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      }]);
    }
    setLoading(false);
  };

  const quickPrompts = ["I have fever and headache", "Explain my CBC result", "High blood pressure advice", "Malaria symptoms?"];

  return (
    <div className="animate-in" style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 100px)" }}>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${C.primary}, ${C.primaryLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🤖</div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>AI Health Assistant</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.muted }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.success, display: "inline-block" }} />
              Online · Powered by Claude AI · NHRMS Cameroon
            </div>
          </div>
        </div>
      </div>

      {/* Quick Prompts */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {quickPrompts.map(p => (
          <button key={p} onClick={() => { setInput(p); }}
            style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${C.border}`, background: "#fff", fontSize: 12, color: C.primary, fontWeight: 500, cursor: "pointer" }}>
            {p}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", background: C.bg, borderRadius: 12, padding: "16px", border: `1px solid ${C.border}` }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: 16 }}>
            {msg.role === "ai" && (
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.primaryLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, marginRight: 8, flexShrink: 0, alignSelf: "flex-end" }}>🤖</div>
            )}
            <div style={{ maxWidth: "72%", display: "flex", flexDirection: "column", alignItems: msg.role === "user" ? "flex-end" : "flex-start" }}>
              {msg.urgency && (
                <div style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: msg.urgency === "High" ? "#FEE2E2" : msg.urgency === "Moderate" ? "#FEF3C7" : "#D1FAE5", color: msg.urgency === "High" ? "#991B1B" : msg.urgency === "Moderate" ? "#92400E" : "#065F46", marginBottom: 4 }}>
                  URGENCY: {msg.urgency}
                </div>
              )}
              <div style={{
                padding: "12px 16px", borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: msg.role === "user" ? C.primary : "#fff",
                color: msg.role === "user" ? "#fff" : C.text,
                fontSize: 13, lineHeight: 1.7,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: msg.role === "ai" ? `1px solid ${C.border}` : "none",
              }}>
                {msg.role === "ai" ? formatMessage(msg.text) : msg.text}
              </div>
              <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>{msg.time}</div>
            </div>
            {msg.role === "user" && (
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700, marginLeft: 8, flexShrink: 0, alignSelf: "flex-end" }}>{user.avatar}</div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${C.primary}, ${C.primaryLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
            <div style={{ padding: "12px 16px", background: "#fff", borderRadius: "16px 16px 16px 4px", border: `1px solid ${C.border}`, display: "flex", gap: 4 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: C.primary, display: "inline-block", animation: `pulse 1.2s infinite ${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask about symptoms, lab results, medications..."
          style={{ flex: 1, padding: "13px 18px", borderRadius: 12, border: `1px solid ${C.border}`, fontSize: 13, color: C.text, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", outline: "none" }} />
        <button onClick={sendMessage} disabled={loading || !input.trim()}
          style={{ width: 48, height: 48, borderRadius: 12, background: loading || !input.trim() ? C.muted : C.primary, color: "#fff", fontSize: 20, border: "none", cursor: loading || !input.trim() ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
      </div>
      <p style={{ fontSize: 10, color: C.muted, marginTop: 6, textAlign: "center" }}>⚠️ AI provides general health information only. Not a substitute for professional medical diagnosis.</p>
    </div>
  );
};
