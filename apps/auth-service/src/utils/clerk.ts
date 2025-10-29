import { createClerkClient } from "@clerk/express";

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export default clerk;
