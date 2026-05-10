import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menu.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});