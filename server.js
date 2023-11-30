const express = require("express");
const PORT = 4000;
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", require("./server/routes/router"))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
