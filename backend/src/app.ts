import express from "express";

const app = express();
const PORT = 8080;

app.get("/ping", (_, res) => {
  res.status(200).json({ message: "Running :)" });
  res.json;
});

app.listen(PORT, () => {
  console.log("App listening on port 8080");
});
