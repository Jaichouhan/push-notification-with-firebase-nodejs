const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000;
const router = require("./routes/notification");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Your Server is listing http://localhost:${PORT}/`);
});
