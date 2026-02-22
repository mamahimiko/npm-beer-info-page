import express from "express";
import * as path from "path";
import beerRouter from "./routes/beerRouter.js";
import beerBarRouter from "./routes/barRounter.js";
import aboutRouter from "./routes/aboutRouter.js";
import { beerInfo } from "./data/beer-data.js";
import "dotenv/config";
import "material-dynamic-colors";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const index = 0;
  const todaysBeer = beerInfo[index + Math.floor(Math.random() * 6)];
  console.log(todaysBeer);
  res.render("pages/index", {
    todaysBeer: todaysBeer,
  });
});

app.use("/beer-list", beerRouter);
app.use("/beer-bar", beerBarRouter);
app.use("/about", aboutRouter);

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
