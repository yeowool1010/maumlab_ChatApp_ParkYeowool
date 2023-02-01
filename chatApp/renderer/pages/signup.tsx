import React from "react";
import Head from "next/head";
import Link from "next/link";
import SignUpForm from "../components/SignUpForm";
import HomeNavigation from "../components/HomeNavigation";
// import { Logo } from "../assets/Images";

function Signup() {
  return (
    <>
      <Head>
        <title>chatApp SignUp</title>
      </Head>
      <HomeNavigation />
      <SignUpForm />
    </>
  );
}

export default Signup;
