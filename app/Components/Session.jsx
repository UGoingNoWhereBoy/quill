import { getServerSession } from "next-auth";
import React from "react";
import auth from "../api/auth/[...nextauth]/route";
import Usermenu from "./Usermenu";

const Session = async () => {
  const session = await getServerSession(auth);
  return <Usermenu sessionData={session} />;
};

export default Session;
