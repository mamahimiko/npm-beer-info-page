import express from "express";
import * as path from "path";
import { beerInfo } from "../data/beer-data.js";

const beerRouter = express.Router();
const __dirnama = path.resolve();

beerRouter.get("/", (req, res) => {
  const selectedBeer = beerInfo.find((beer) => beer.id === req.query.id);
  console.log("selectedBeer: ", selectedBeer);
  res.render(path.join(__dirnama, "/views/pages/beer-list.ejs"), {
    pageType: "beerList",
    beerInfo: beerInfo,
    selectedBeer: selectedBeer,
  });
});

export default beerRouter;
