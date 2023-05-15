export const FetchBooks = async () => {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/post`, {
    cache: "no-store",
  });
  const books = await res.json();
  const { data } = books;
  return data;
};
