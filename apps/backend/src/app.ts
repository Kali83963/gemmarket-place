import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { setupSwagger } from "./config/swagger";
import { appRoutes } from "./routes";

dotenv.config();
const corsOptions = {
  origin: /localhost:(3000|3001)$/,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};
const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json());

app.use("/uploads", express.static("uploads"));

setupSwagger(app);
app.use("", appRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
