import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

import path from "path";

const __dirname = path.resolve();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

if (process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  })
}