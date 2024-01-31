import { Hono } from "https://deno.land/x/hono@v3.12.8/mod.ts";
import io from "./configs/socket.ts";
const app = new Hono();
app.get("/", (c) => c.text("Welcome to dinosaur API!"));

import "./sockets.ts";
io.on("connection", () => {
  console.log("a user connected");
});

Deno.serve(io.handler(app.fetch));
