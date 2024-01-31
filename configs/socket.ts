import { Server } from "https://deno.land/x/socket_io@0.2.0/mod.ts";
const io = new Server({
  cors: {
    origin: "*",
  },
});

export default io;
