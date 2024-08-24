import { Hono } from "hono";
import { cors } from "hono/cors";
import "jsr:@std/dotenv/load";
import env from "@/configs/env.ts";
import probirRoute from "@/probir/route.ts";

const app = new Hono();
app.use(cors({ origin: env.CORS }));

app.route("/probir", probirRoute);
export default app;

Deno.serve(app.fetch);
