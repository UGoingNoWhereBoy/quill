"use client";

import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { RiUserAddFill } from "react-icons/ri";
import { ImPriceTag } from "react-icons/im";
import { Nobooksfound } from "../Components/Errorpages";
import Link from "next/link";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { FetchBooks } from "./../lib/get-books";

const Books = ({ books }) => {
  const [newBooks, setNewBooks] = useState(books);
  const [isLoading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  const toast = useRef(null);

  const showSuccess = () => {
    toast?.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Book has been removed.",
      life: 3000,
    });
  };
  const showError = () => {
    toast?.current?.show({
      severity: "danger",
      summary: "Error",
      detail:
        "There was an error deleting your book, check your console for details.",
      life: 3000,
    });
  };
  const handleDelete = async (bookID) => {
    setLoading(true);

    const res = await fetch(`https://${process.env.VERCEL_URL}/api/delete`, {
      method: "POST",
      body: JSON.stringify({ bookID }),
    });
    const newBooks = await FetchBooks();
    if (res.ok) {
      setLoading(false);
      showSuccess();
      setNewBooks(newBooks);
    } else {
      setLoading(false);
      console.log(res);
      showError();
    }
  };

  return (
    <div className="flex justify-center">
      {newBooks?.length < 1 ? (
        <Nobooksfound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-8">
          {newBooks?.map((book, k) => (
            <div
              className="block rounded-lg p-4 border-2 border-t-violet-400 border-b-violet-400 border-r-violet-500 border-l-violet-600"
              key={k}
            >
              <img
                alt="Home"
                src={book?.bookImage}
                className="h-40 w-full object-cover rounded-md sm:h-56"
              />

              <div className="mt-4">
                <dl>
                  <div>
                    <dt className="sr-only"></dt>
                    <dd className="text-sm text-gray-500"></dd>
                  </div>

                  <div>
                    <dt className="sr-only">Book Name</dt>
                    <dd className="font-medium text-lg">{book.bookName}</dd>
                  </div>
                </dl>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <div className="inline-flex items-center gap-1">
                    <RiUserAddFill />
                    <div>
                      <p className="text-gray-500">Author</p>
                      <p className="font-medium">{book.author}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1">
                    {book.bookQty >= 10 ? (
                      <BsArrowUp className="text-green-500" />
                    ) : (
                      <BsArrowDown className="text-red-500" />
                    )}
                    <div>
                      <p className="text-gray-500">Quantity</p>
                      <p className="font-medium">{book.bookQty}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <ImPriceTag />
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-medium">${book.bookPrice.toFixed()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {session?.user?.id === book.userID && (
                <div className="flex justify-center mt-4">
                  <Toast ref={toast} />
                  <Button
                    onClick={() => handleDelete(book._id)}
                    raised
                    outlined
                    loading={isLoading}
                    label="Delete"
                    severity="danger"
                    icon="pi pi-trash"
                  />
                  <Link href={`/update/${book._id}`} className="ml-2">
                    <Button
                      icon="pi pi-file-edit"
                      outlined
                      raised
                      severity="info"
                      label="Edit book"
                    />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
