import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { Notfound, Unauthorized } from "@/app/Components/Errorpages";
import Editbook from "./Editbook";
import { getServerSession } from "next-auth";
import auth from "@/app/api/auth/[...nextauth]/route";

export default async function Page({ params }) {
  const session = await getServerSession(auth);

  const { id } = params;
  if (session === null) {
    return <Unauthorized />;
  }
  const client = await clientPromise;
  const db = client.db("myBooks");
  try {
    const singleBook = await db
      .collection("books")
      .find({ _id: new ObjectId(id) })
      .toArray();
    const [{ bookName, author, bookQty, bookPrice, bookImage, _id }] =
      singleBook;
    const bookid = _id.toString();
    return (
      <Editbook
        bookName={bookName}
        author={author}
        bookQty={bookQty}
        bookPrice={bookPrice}
        bookImage={bookImage}
        bookID={bookid}
      />
    );
  } catch (error) {
    return <Notfound />;
  }
}
