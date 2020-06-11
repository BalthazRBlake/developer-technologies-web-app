const server = require("./server");
const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log(`Backend up an running in PORT ${PORT}`);
});