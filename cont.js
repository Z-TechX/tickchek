document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const note = document.getElementById("formNote");
  const targetWhatsApp = "8801304072381";

  const setStatus = (msg) => {
    if (note) {
      note.textContent = msg;
    }
  };

  const normalizeBdPhone = (raw) => {
    const digits = raw.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("880")) return digits;
    if (digits.startsWith("0")) return `88${digits}`;
    return digits;
  };

  const buildWhatsAppMessage = ({ name, whatsapp, formattedWhatsapp, email, eventType, message }) => {
    const lines = [
      `Hey! I'm ${name}, reaching out from my WhatsApp (${formattedWhatsapp || whatsapp}) regarding a ${eventType} event.`,
      "",
      "Here are the quick details:",
      `- Name: ${name}`,
      `- WhatsApp: ${formattedWhatsapp || whatsapp}`,
      `- Event Type: ${eventType}`
    ];

    if (email) {
      lines.push(`- Email: ${email}`);
    }

    lines.push(`- Details: ${message || "Planning an event and looking for TickChik registration & gate support."}`);
    lines.push("", "Let me know what works best when you get a chance. Thanks!");

    return lines.join("\n");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (form.querySelector('[name="name"]')?.value || "").trim();
    const whatsapp = (form.querySelector('[name="whatsapp"]')?.value || "").trim();
    const email = (form.querySelector('[name="email"]')?.value || "").trim();
    const eventType = (form.querySelector('[name="eventType"]')?.value || "").trim();
    const message = (form.querySelector('[name="message"]')?.value || "").trim();

    if (!name || !whatsapp || !eventType) {
      setStatus("Please fill in your name, WhatsApp number, and event type.");
      return;
    }

    const normalizedSender = normalizeBdPhone(whatsapp);
    if (normalizedSender.length < 10) {
      setStatus("Please enter a valid WhatsApp number.");
      return;
    }

    const text = buildWhatsAppMessage({
      name,
      whatsapp,
      formattedWhatsapp: `+${normalizedSender}`,
      email,
      eventType,
      message
    });

    const waUrl = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus(`WhatsApp chat prepared for 01304072381 with your details (from ${whatsapp}).`);
  });
});