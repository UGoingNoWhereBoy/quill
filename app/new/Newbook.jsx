"use client";

import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import Loading from "./loading";
import { Button } from "primereact/button";
import { BsSendCheck } from "react-icons/bs";
import { Toast } from "primereact/toast";

export default function Newbook() {
  const [isLoading, setLoading] = useState(false);
  const [isMounting, setMounting] = useState(true);
  const { data: session, status } = useSession();
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Book has been added.",
      life: 3000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "warning",
      summary: "Error",
      detail: "There was an error posting the book, please check your console.",
      life: 3000,
    });
  };
  useEffect(() => {
    setMounting(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      bookAuthor: "",
      bookName: "",
      bookPrice: "",
      bookQty: "",
      bookImage: "",
    },
    validationSchema: Yup.object({
      bookAuthor: Yup.string()
        .max(25, "Must be 50 characters or less")
        .required("Required"),
      bookName: Yup.string()
        .max(25, "Must be 50 characters or less")
        .required("Required"),
      bookPrice: Yup.number().min(1, "Must be positive").required("Required"),
      bookQty: Yup.number().min(1, "Must be positive").required("Required"),
      bookImage: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const data = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          author: values.bookAuthor,
          bookName: values.bookName,
          bookQty: values.bookQty,
          bookPrice: values.bookPrice,
          bookImage: values.bookImage,
          userID: session?.user?.id,
        }),
      });
      if (data.ok) {
        setLoading(false);
        resetForm();
        showSuccess();
      } else {
        setLoading(false);
        showError();
      }
    },
  });
  if (isMounting) {
    return <Loading />;
  }

  return (
    <div
      className=" rounded-xl shadow-2xl shadow-inherit h-screen max-w-screen-lg mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8 
    flex flex-col md:flex-row justify-between items-start md:items-center sm:mt-2"
    >
      <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="bookAuthor"
            value={formik.values.bookAuthor}
            onChange={formik.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Book Author
          </label>
          {formik.errors.bookAuthor && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.bookAuthor}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="bookName"
            value={formik.values.bookName}
            onChange={formik.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Book Name
          </label>
          {formik.errors.bookName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.bookName}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="bookQty"
            value={formik.values.bookQty}
            onChange={formik.handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Book Quantity
          </label>
          {formik.errors.bookQty && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.bookQty}
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="bookPrice"
              value={formik.values.bookPrice}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Book Price
            </label>
            {formik.errors.bookPrice && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.bookPrice}
              </div>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              name="bookImage"
              value={formik.values.bookImage}
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Book Image Url
            </label>
            {formik.errors.bookImage && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.bookImage}
              </div>
            )}
            {formik.values.bookImage ? (
              <img src={formik.values.bookImage} className="w-24 h-24" />
            ) : null}
          </div>
        </div>
        <Toast ref={toast} />

        <Button
          label="Add book"
          outlined
          loading={isLoading}
          icon={<BsSendCheck className="mr-2" />}
          type="submit"
        />
      </form>
    </div>
  );
}
