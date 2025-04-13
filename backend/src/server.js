// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errHandler from "./middlewares/errorHandler.js";
import buildPortalRoute from './routes/buildPortalRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", buildPortalRoute);

// Error handler
app.use(errHandler);

export default app;
