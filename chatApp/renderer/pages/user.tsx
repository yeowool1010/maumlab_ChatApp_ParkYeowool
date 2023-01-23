import React from "react";
import Head from "next/head";
import HomeNavigation from "../components/HomeNavigation";
import UserList from "../components/UserList";

function User() {
  return (
    <>
      <Head>
        <title>chatApp user</title>
      </Head>
      <div className="flex flex-col bg-rad">
        <UserList />
      </div>
    </>
  );
}

export default User;
