import env from "@/configs/env.ts";
import type { ContactFields } from "@/configs/schemas.ts";

export async function telegramMessageSender(message: String) {
  try {
    const url = `${env.TELEGRAM_URL}/sendMessage`;
    const data = {
      chat_id: env.TELEGREM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const res = await fetch(url, options);
    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (e) {
    return false;
  }
}

type TelegramFields = ContactFields & { origin: string };
export async function sendTelegramMessage({ name, email, message, origin }: TelegramFields) {
  const formattedMessage = `
    📬 <b>New Contact Form Submission</b>\n
    <b>🤖 Name:</b> ${name}\n
    <b>📧 Email:</b> ${email}\n
    <b>🗨️ Message:</b> ${message}\n
    <b>🌐 Origin:</b> ${origin}
  `;
  return await telegramMessageSender(formattedMessage);
}
