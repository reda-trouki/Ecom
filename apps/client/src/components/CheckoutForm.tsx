"use client"

import { ShippingFormInputs } from "@repo/types"
import { PaymentElement, useCheckout } from "@stripe/react-stripe-js/checkout";
import { ConfirmError } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";


const CheckoutForm = ({ shippingForm }: { shippingForm: ShippingFormInputs }) => {
    const checkout = useCheckout();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ConfirmError | null>(null);
    const router = useRouter();

    const handleClick = async (e:any) => {
        e.preventDefault();
        if (checkout.type === "loading") {
            setLoading(true);
        } else if (checkout.type === "success") {
            await checkout.checkout.updateEmail(shippingForm.email);
            await checkout.checkout.updateShippingAddress({
                name: "shipping_address",
                address: {
                    line1: shippingForm.address,
                    city: shippingForm.city,
                    country: "US"
                }
            });
            const res = await checkout.checkout.confirm();
            if (res.type === "error") {
                setError(res.error)
            }
            setLoading(false);
        }

    }

    return (
        <form>
            <PaymentElement options={{ layout: "accordion" }} />
            <button className="w-full bg-blue-400 text-white p-2 my-2" disabled={loading} onClick={(e)=>handleClick(e)}>
                {loading ? "Loading..." : "Pay"}
            </button>
            {error && <div className="text-red-500">{error.message}</div>}
        </form>
    )
}

export default CheckoutForm