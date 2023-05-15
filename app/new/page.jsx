import { getServerSession } from "next-auth";
import Newbook from "./Newbook";
import auth from "@/app/api/auth/[...nextauth]/route";
import { Unauthorized } from "../Components/Errorpages";

const page = async () => {
  const session = await getServerSession(auth);
  if (session === null) {
    return <Unauthorized />;
  }
  return <Newbook />;
};

export default page;
