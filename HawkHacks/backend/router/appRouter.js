const express = require("express")
const Router = express.Router();
const router = require("../routes/authRoute")

const appRouter = Router();
appRouter.use("/", router);

module.exports(appRouter);