import io from "../configs/socket.ts";
const baseName = "/tic-tac-toe";
io.of(baseName).on("connection", (socket) => {
  console.log("a user connected to tic-tac-toe");
});
