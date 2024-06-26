"use client";

import { getStripePromise } from "@/lib/stripe";
import { Productprops } from "@/types/products";



interface Props {
    products: Productprops[];
}

const StripeCheckOutButton = (props: Props) => {


    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        const response = await fetch(`/api/stripe-session/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(props.products),
        });

        const data = await response.json();

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    };

    return (
        <div className="py-5">
            <button
                className="bg-[#212121] text-white py-3 px-3 rounded-md"
                onClick={handleCheckout}
            >
                Process to Checkout
            </button>
        </div>
    );
};

export default StripeCheckOutButton;