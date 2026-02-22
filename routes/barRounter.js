import express from "express";
import * as path from "path";
import { beerBarInfo } from "../data/beerbar-data.js";

const beerBarRouter = express.Router();
const __dirnama = path.resolve();

beerBarRouter.get("/", (req, res) => {
  const barArea = [...new Set(beerBarInfo.map((bar) => bar.area))];
  const selectArea = beerBarInfo.filter(
    (list) => list.area.replace(" ", "").toLowerCase() === req.query.area
  );
  console.log("selectArea", selectArea);
  console.log(req.query.area);

  res.render(path.join(__dirnama, "/views/pages/beer-bar.ejs"), {
    pageType: "beerBarList",
    beerBarInfo: beerBarInfo,
    barArea: barArea,
    selectArea: selectArea,
  });
});

export default beerBarRouter;
