const app = require("./app");

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log("Server started at PORT: ", process.env.PORT);
});
