import express from "express";

const app = express();
let count = 0;
app.get("/", (_req, res) => {
  console.log("User is on home page");
  count++;
  debugger;
  res.send("Hi");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
