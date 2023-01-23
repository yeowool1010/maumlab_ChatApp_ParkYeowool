import React from "react";
import Head from "next/head";
import HomeNavigation from "../components/HomeNavigation";
import ChatRoom from "../components/ChatRoom";

function Chat() {
  return (
    <>
      <Head>
        <title>chatApp chat</title>
      </Head>
      <div className="flex flex-col bg-rad">
        <ChatRoom />
        <HomeNavigation />
      </div>
    </>
  );
}

export default Chat;
