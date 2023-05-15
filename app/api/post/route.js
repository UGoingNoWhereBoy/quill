import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
export const revalidate = 1;

export async function POST(request) {
  const data = await request.json();
  const client = await clientPromise;
  const db = client.db("myBooks");
  const { author, bookName, bookQty, bookPrice, bookImage, userID } =
    await data;
  const book = {
    author,
    bookName,
    bookQty,
    bookPrice,
    bookImage,
    userID,
  };
  await db.collection("books").insertOne(book);

  return NextResponse.json({ status: 200 });
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db("myBooks");
  const allBooks = await db.collection("books").find({}).toArray();
  return NextResponse.json({ status: 200, data: allBooks });
}
