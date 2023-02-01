import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "@firebase/firestore";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";

// interface ChatRoom {
//   selectChatRoomId: number;
//   // user: string[];
// }

function ChatRoom() {
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
  }, [db]);

  return (
    <div className="w-full scrollbar-thin scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="p-2 mb-2"></div>
      <div className="scrollbar-thin h-[300px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        {chatRoom.map((chatRoom, idx) => {
          return (
            <div className="flex justify-end">
              <p key={chatRoom.name}>{chatRoom.name}</p>
              <div
                key={idx}
                className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 "
              >
                <p key={chatRoom.name}>{chatRoom.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatRoom;
