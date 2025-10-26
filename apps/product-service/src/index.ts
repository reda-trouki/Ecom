import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { shouldBeUser } from "./middleware/authMiddleware";
import productRouter from "./routes/product.route";
import categoryRouter from "./routes/category.route";
import { clerkMiddleware } from "@clerk/express";
import { consumer, producer } from "./utils/kafka";
import { runKafkaSubscreptions } from '../../payment-service/src/utils/subscreptions';

const app = express();

app.use(clerkMiddleware());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});
app.get("/test", shouldBeUser, (req, res) => {
  console.log("Product Service Authenticated");
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(err.status || 500).json({
    message: err.message || "Internal Server Error!",
  });
});

const start = async () => {
  try {
    Promise.all([await producer.connect(), await consumer.connect()]);
    app.listen(8001, () => {
      console.log("Product Service Is Running on port 8001");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
