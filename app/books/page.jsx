import { FetchBooks } from "../lib/get-books";
import Books from "./Books";

const page = async () => {
  const data = await FetchBooks();
  return <Books books={data} />;
};

export default page;
