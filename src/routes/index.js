import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";

const router = express.Router();

// 將所有子路由（/signup...）都掛載進主路由（/user）
router.use("/user", userRoute);
// 當路徑中有 /user 就套用 userRoute 這個 middleware
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/:mediaType", mediaRoute);

export default router;
