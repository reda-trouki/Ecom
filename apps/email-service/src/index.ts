import { consumer } from "./utils/kafka";
import sendMail from "./utils/mailer";

const start = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe([
      {
        topicName: "user.created",
        topicHandler: async (message) => {
          const { username, email } = message.value;
          if (email) {
            await sendMail({
              email,
              subject: "Welcome to Ecom application",
              text: `Welcome ${username}, your account has been created!`,
            });
          }
        },
      },
      {
        topicName: "order.created",
        topicHandler: async (message) => {
          const { email, amount, status } = message.value;
          if (email) {
            await sendMail({
              email,
              subject: "Order has been created",
              text: `Hello, your order Amount: ${amount/100}, Status: ${status}`,
            });
          }
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

start();
