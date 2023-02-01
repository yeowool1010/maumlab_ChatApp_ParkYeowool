import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Head from "next/head";
import ChatRoom from "../../components/ChatRoom";
import { db, firebaseAuth } from "../../../firebaseconfig";
import { set, push, ref, onValue } from "firebase/database";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import ChatInput from "../../components/ChatInput";
import HomeNavigation from "../../components/HomeNavigation";
import router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useDocumentData,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import { orderBy, query } from "firebase/firestore";

function ChatRoomPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user] = useAuthState(firebaseAuth);
  // console.log(user);
  // const [chat] = useDocumentData(doc(db, "chats", id));
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);
  const bottomOfChat = useRef();
  console.log(messages);
  const getMessages = () =>
    messages?.map((msg) => {
      const sender = msg.sender === user.email;
      return (
        <div key={Math.random()}>
          <p>{msg.text}</p>
        </div>
      );
    });

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
          {getMessages()}
          <ChatRoom />
        </div>
      </div>
      <div className="w-full fixed bottom-0">
        <ChatInput id={id} user={user} />
      </div>
    </>
  );
}

export default ChatRoomPage;
