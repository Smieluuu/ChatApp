const ws = require("ws");
const qs = require("qs");

const port = 8080;
const wss = new ws.WebSocketServer({ port });

const verifyClient = (info, done) => {
  const { url } = info.req;
  const query = url.substr(1);
  const user = qs.parse(query, { ignoreQueryPrefix: true });

  if (!user) return done(false);
  if (!user.name) return done(false);

  done(true);
};

wss.on("listening", () => {
  console.log(`Server run on port ${port}`);
});

wss.on("connection", (client) => {
  client.on("message", (data) => {
    const message = data.toString();

    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});
