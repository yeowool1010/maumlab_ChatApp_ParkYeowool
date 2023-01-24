import React from "react";
import Head from "next/head";
import HomeNavigation from "../components/HomeNavigation";
import ChatList from "../components/ChatList";

function Chat() {
  return (
    <>
      <Head>
        <title>chatApp chat</title>
      </Head>
      <div className="flex flex-col">
        <ChatList />
      </div>
    </>
  );
}

export default Chat;
