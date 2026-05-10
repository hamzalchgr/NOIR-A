import express from "express";
import {
  getMenu,
  getCategory,
  getDish
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getMenu); // /api/menu
router.get("/:category", getCategory); // /api/menu/drinks
router.get("/dish/:name", getDish); // /api/menu/dish/espresso

export default router;