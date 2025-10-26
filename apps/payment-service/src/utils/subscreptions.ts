import { consumer } from "./kafka";
import { createStripeProduct, deleteStripeProduct } from "./stripeProduct";

export const runKafkaSubscreptions = async () => {
  consumer.subscribe("product.created", async (message) => {
    const product = message.value;
    console.log("Received Message: product.created" + product);

    await createStripeProduct(product);
  });
  consumer.subscribe("product.deleted", async (message) => {
    const productId = message.value;
    console.log("Received Message: product.created" + productId);

    await deleteStripeProduct(productId);
  });
};
