import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";




export const POST = async (request: NextRequest) => {
    const { userId } = auth();

    const req: addToCart = await request.json();

    try {
        if (req && userId) {
            const res = await db
                .insert(cartTable)
                .values({
                    user_id: userId as string,
                    product_id: req.product_id,
                    quantity: req.quantity,
                    image: req.image,
                    price: req.price,
                    product_name: req.product_name,

                    total_price: req.price * req.quantity,
                })
                .returning();
            return NextResponse.json({ res });
        } else {
            throw new Error("Failed to insert Data");
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        });
    }
};

export const PUT = async (request: NextRequest) => {
    const { userId } = auth();

    const data: addToCart = await request.json();

    try {
        if (data && userId) {
            await db.update(cartTable).set({
                quantity: data.quantity,
                total_price: data.price
            }).where(and(eq(cartTable.user_id, userId), eq(cartTable.product_id, data.product_id))).returning()
            return NextResponse.json({ Message: "Data updates" }, { status: 200 })
        } else {
            throw new Error("Failed to add data")
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        });
    }
}


export const DELETE = async (request: NextRequest) => {
    const { userId } = auth();
    const Url = request.nextUrl;
    try {
        if (Url.searchParams.has("product_id") && userId) {
            const product_id = Url.searchParams.get("product_id");

            const res = await db.delete(cartTable).where(and(eq(cartTable.user_id, userId), eq(cartTable.product_id, product_id as string)))

            return NextResponse.json({ Message: "Data Removed" }, { status: 200 })

        } else {
            if (Url.searchParams.has("product_id")) {
                throw new Error("Login required")
            } else {
                throw new Error("Product Id required")
            }
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        }, { status: 405 });
    }
}