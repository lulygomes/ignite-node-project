import express from "express";

import categoryRoutes from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);

app.listen(4444, () => console.log("O server tá ON 4444"));
