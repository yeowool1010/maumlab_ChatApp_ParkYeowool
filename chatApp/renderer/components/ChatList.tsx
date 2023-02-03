import React, { useState, useEffect } from "react";
import { db, firebaseAuth } from "../../firebaseconfig";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChatModal from "../../renderer/components/NewChatModal";
import { isModalOpen } from "../recoil/authAtom";
import { useRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatList() {
  const [userName, setUserName] = useState<string>("");

  const [user] = useCollection(collection(db, "userInfo"));

  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const allUser = user?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(isModalOpen);
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
        // chatRoomList = chatRoomList.filter(
        //   (user) => user.users !== localStorage.getItem("user")
        // );
        setChatRoom(chatRoomList);
        console.log(chatRoomList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);

  const showNewChatModal = (e: any) => {
    setIsChatModalOpen(true);
  };

  const getInputUserName = (userName: string) => {
    setUserName(userName);
  };

  // const chatExists = (name) =>
  //   chats?.find(
  //     (chat) => chat.users.includes(allUser) && chat.users.includes(email)
  //   );

  const newChat = async (userName) => {
    const input = userName;

    if (input !== localStorage.getItem("user") && input !== "") {
      await addDoc(collection(db, "chats"), {
        users: [input],
        // message: input,
        // createdAt: serverTimestamp(),
        // name: localStorage.getItem("user"),
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-full ">
      {isChatModalOpen && (
        <NewChatModal
          newChat={() => newChat(userName)}
          setUserName={getInputUserName}
        />
      )}
      <div className="flex flex-col w-full px-3 ">
        <div className="font-bold text-xl mb-5 text-left">채팅</div>
        <div className="flex items-center justify-center ">
          <button
            onClick={showNewChatModal}
            className="w-10/12 mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded"
          >
            <a>채팅방만들기</a>
          </button>
        </div>
        <div className="scrollbar-thin h-[360px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {chatRoom
            // .filter((chatRoom) => chatRoom.users === "")
            .map((chatRoom, idx) => {
              return (
                // 채팅방 아이디로 구분하여 페이지 라우팅
                <Link key={idx} href={`/chatRoom/${chatRoom.id}`}>
                  <div className="flex justify-start items-center bg-white shadow-lg cursor-pointer	 w-full h-10 px-4 mb-2">
                    <ChatIcon />
                    <p className="pl-2">{chatRoom.users}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
