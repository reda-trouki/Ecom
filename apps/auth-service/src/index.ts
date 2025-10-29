import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { shouldBeAdmin } from "./middleware/authMiddleware";
import userRoute from "./routes/user.route";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(clerkMiddleware());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3001"],
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

app.use("/users", shouldBeAdmin, userRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(err.status || 500).json({
    message: err.message || "Internal Server Error!",
  });
});

const start = async () => {
  try {
    // Promise.all([await producer.connect(), await consumer.connect()]);
    app.listen(8004, () => {
      console.log("Auth Service Is Running on port 8004");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
