import { Router } from "express";
import clerk from "../utils/clerk";
import { producer } from "../utils/kafka";

const router: Router = Router();

router.get("/", async (req, res) => {
  const users = await clerk.users.getUserList();
  return res.status(200).json(users);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await clerk.users.getUser(id);
  return res.status(200).json(user);
});
router.post("/", async (req, res) => {
  type CreateParams = Parameters<typeof clerk.users.createUser>[0];
  const newUser:CreateParams = req.body;
  const user = await clerk.users.createUser(newUser);

  producer.send("user.created", {
    value: {
      username: user.username,
      email: user.emailAddresses[0]?.emailAddress,
    }
  })

  return res.status(200).json(user);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await clerk.users.deleteUser(id);
  return res.status(200).json(user);
});

export default router;
