"use server"
import { auth } from '@clerk/nextjs/server';

const TestPage = async () => {
    const { getToken } = await auth();
    const token = await getToken();
    console.log(token)

    const resProduct = await fetch("http://localhost:8001/health", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const ProductData = resProduct.json();

    console.log(ProductData);

    const resOrder = await fetch("http://localhost:8002/health", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const OrderData = resOrder.json();

    console.log(OrderData);

    const resPayment = await fetch("http://localhost:8003/health", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const PaymentData = resPayment.json();

    console.log(PaymentData);


    return (
        <div>Auth test page</div>
    )
}

export default TestPage