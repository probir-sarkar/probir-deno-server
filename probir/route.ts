import { Hono } from "hono";
import { contactFormSchema } from "@/configs/schemas.ts";
import { sendTelegramMessage } from "@/configs/telegram.ts";
import { projects } from "@/data/projects.ts";
const app = new Hono();
app.get("/projects", (c) => {
  return c.json(projects);
});

app.post("/contact-form", async (c) => {
  try {
    const body = await c.req.json();
    const data = contactFormSchema.parse(body);
    const sendMessage = await sendTelegramMessage(data);
    return c.json({ success: sendMessage ? true : false });
  } catch (e) {
    return c.json({ success: false, message: "Failed to send message" });
  }
});
export default app;
