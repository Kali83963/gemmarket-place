import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { setupSwagger } from "./config/swagger";
import { appRoutes } from "./routes";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(cors());

app.use(express.json());

setupSwagger(app);
app.use("", appRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
