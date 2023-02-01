import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Head from "next/head";
import ChatRoom from "../components/ChatRoom";
import { db, firebaseAuth } from "../../firebaseconfig";
import { set, push, ref, onValue } from "firebase/database";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import ChatInput from "../components/ChatInput";
import HomeNavigation from "../components/HomeNavigation";

function ChatRoomPage() {
  const [chatRoom, setChatRoom] = useState([]);

  let chatRoomList = [];

  useEffect(() => {
    getDocs(collection(db, "chats"))
      .then((res) => {
        res.forEach((doc) => {
          chatRoomList.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        chatRoomList = chatRoomList.filter(
          (user) => user.name === localStorage.getItem("user")
        );
        setChatRoom(chatRoomList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>chatApp chatroom</title>
      </Head>
      <HomeNavigation />
      <div className="flex flex-col h-full ">
        <div className="h-fit p-3">
          <div className="h-fit p-2 mb-2">채팅방</div>
          <ChatRoom />
        </div>
      </div>
      <div className="w-full fixed bottom-0">
        <ChatInput />
      </div>
    </>
  );
}

export default ChatRoomPage;
