import express from "express";
import * as path from "path";

const aboutRouter = express.Router();
const __dirnama = path.resolve();

aboutRouter.get("/", (req, res) => {
  res.render(path.join(__dirnama, "/views/pages/about.ejs"), {
    pageType: "about",
  });
});

export default aboutRouter;
