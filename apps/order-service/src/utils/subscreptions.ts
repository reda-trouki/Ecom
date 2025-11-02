import { consumer } from "./kafka";
import { createOrder } from "./order";

export const runKafkaSubscreptions = async () => {
  // consumer.subscribe("payment.successful", async (message) => {
  //   console.log("Received Message: payment.successful" + message);

  //   const order = message.value;
  //   await createOrder(order);
  // });
  consumer.subscribe([
    {
      topicName: "payment.successful",
      topicHandler: async (message) => {
        console.log("Received Message: payment.successful" + message);
        const order = message.value;
        await createOrder(order);
      },
    },
  ]);
};
