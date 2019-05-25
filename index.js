const express = require("express");
const app = express();

const port = 80;

app.use(express.static("public")); // relative path

app.listen(port, () =>
  console.log(`zeus-lab.dev server listening on port ${port}!`)
);
