import { consumer } from "./kafka";
import { createStripeProduct, deleteStripeProduct } from "./stripeProduct";

export const runKafkaSubscreptions = async () => {
  consumer.subscribe([
    {
      topicName: "product.created",
      topicHandler: async (message) => {
        const product = message.value;
        console.log("Received Message: product.created" + product);

        await createStripeProduct(product);
      },
    },
    {
      topicName: "product.deleted",
      topicHandler: async (message) => {
        const productId = message.value;
        console.log("Received Message: product.created" + productId);

        await deleteStripeProduct(productId);
      },
    },
  ]);
};
