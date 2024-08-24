const env = {
  TELEGRAM_URL: Deno.env.get("TELEGRAM_URL"),
  TELEGREM_CHAT_ID: Deno.env.get("TELEGREM_CHAT_ID"),
  CORS: Deno.env.get("CORS")?.split(",") || []
};

export default env;
