import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";




export const POST = async (request: NextRequest) => {
    const userId = "jjjjj22";

    const req:addToCart = await request.json();
    try {
        if (req) {
            await db.insert(cartTable).values({
                user_id: userId,
                product_id: req.product_id,
                product_name: req.product_name,
                image: req.image,
                price: req.price,
                quantity: req.quantity,
                total_price: req.total_price
                
            }).returning();
        
            return NextResponse.json({ message: "data added to db" }, { status: 200 })
        }
        else {
            throw new Error("Failed to add data")
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        });
    }
}

export const PUT = async (request: NextRequest) => {
    const userId = "jjjjj22";
    const data:addToCart = await request.json();

    try {
        if (data) {
            await db.update(cartTable).set({
                quantity: data.quantity,
                total_price: data.price
            }).where(and(eq(cartTable.user_id,userId),eq(cartTable.product_id,data.product_id))).returning()
            return NextResponse.json({Message:"Data updates"}, { status: 200 })
        } else {
            throw new Error("Failed to add data")
        }

    }catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        });
    }
}


export const DELETE = async (request: NextRequest) => {
    const userId = "jjjjj22";
    const Url = request.nextUrl;
    try {
        if (Url.searchParams.has("product_id") && userId) {
            const product_id = Url.searchParams.get("product_id");

            const res = await db.delete(cartTable).where(and(eq(cartTable.user_id,userId),eq(cartTable.product_id,product_id as string)))

            return NextResponse.json({Message:"Data Removed"},{status:200})

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
        },{status:405});
    }
}