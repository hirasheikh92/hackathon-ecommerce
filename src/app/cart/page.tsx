"use client";
import { useAppSelector } from "@/redux/store";
import { BiShoppingBag } from "react-icons/bi";
import { Toaster, toast } from "react-hot-toast";
import Wrapper from "@/components/view/Wrapper";
import CartItemCard from "@/components/view/CartItemCard";
import StartShopping from "@/components/view/StartShopping";
import StripeCheckOutButton from "@/components/view/CheckOut";




const CartData = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const totalItems = useAppSelector((state) => state.cart.totalQuantity);
    const totalPrice = useAppSelector((state) => state.cart.totalAmount);

    if (cartItems.length > 0) {
        return (
            <Wrapper className="">
                <h3>Shopping Cart</h3>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-x-5 px-5">
                    <div className="basis-3/4">
                        {cartItems.map((elm) => (
                            <CartItemCard key={elm._id} cartItem={elm} />
                        ))}
                    </div>
                    <div className="basis-1/4 bg-gray-200 rounded-md w-full h-full  mt-5 sm:mt-0 p-2 self-start">
                        <div className="flex flex-col items-center justify-between gap-5">
                            <h4>Order Summary</h4>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p>Quantity</p>
                                </div>
                                <div>
                                    <p>{totalItems}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p>Total Amount</p>
                                </div>
                                <div>
                                    <p>${totalPrice}</p>
                                </div>
                            </div>
                            <div>
                                <StripeCheckOutButton products={cartItems} />
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </Wrapper>
        );
    } else {
        return (
            <Wrapper className="">
                <h3>Shopping Cart</h3>

                <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
                    <BiShoppingBag size={200} />
                    <h1>Your shopping bag is empty</h1>
                    <StartShopping />
                </div>
            </Wrapper>
        );
    }
};

export default CartData;

function v4() {
    throw new Error("Function not implemented.");
}
