import http from "http";
import SocketService from "./services/socket";

async function init() {
  const httpServer = http.createServer();

  const socketService = new SocketService();

  const PORT = process.env.PORT || 8000;

  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () => {
    console.log(`HTTP Server listening on ${PORT}`);
  });

  socketService.initListener();
}

init();
