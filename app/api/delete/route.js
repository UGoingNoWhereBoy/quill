import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const data = await request.json()
    const { bookID } = await data;
    const db = client.db("myBooks");
    await db.collection("books").deleteOne({ _id: new ObjectId(bookID) })

    return NextResponse.json({status: 200, message: "Book has been deleted"})
}