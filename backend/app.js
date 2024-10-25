import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

// Connecting frontend with backend using cors
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

// Convert json data into string
app.use(express.json());
// Check the datatype sent by the user.
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
