import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db("myBooks");
    const data = await request.json()
    const {
        author,
        bookName,
        bookQty,
        bookPrice,
        userID,
        bookImage,
        bookID,
    } = await data;
   
    await db.collection("books").updateOne({ _id: new ObjectId(bookID) }, {
        $set: {
            author,
            bookName,
            bookQty,
            bookPrice,
            bookImage,
            userID 
        }
    })

    return NextResponse.json({status: 200, message: "Book has been updated"})
}