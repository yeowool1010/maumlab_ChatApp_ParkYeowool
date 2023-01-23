import React from "react";
import Head from "next/head";
import HomeNavigation from "../components/HomeNavigation";
import UserList from "../components/UserList";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <>
      <Head>
        <title>chatApp home</title>
      </Head>
      <LoginForm />
    </>
  );
}

export default Home;
