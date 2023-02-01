import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChatModal from "../../renderer/components/NewChatModal";
import { isModalOpen } from "../recoil/authAtom";
import { useRecoilState } from "recoil";

function ChatRoom() {
  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(isModalOpen);
  const [chatRoom, setChatRoom] = useState([]);

  let chatRoomList = [];
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  // useEffect(() => {
  //   getDocs(collection(db, "chats"))
  //     .then((res) => {
  //       res.forEach((doc) => {
  //         chatRoomList.push({ id: doc.id, ...doc.data() });
  //       });
  //     })
  //     .then(() => {
  //       console.log(chatRoomList);
  //       chatRoomList = chatRoomList.filter(
  //         (user) => user.name !== localStorage.getItem("user")
  //       );
  //       setChatRoom(chatRoomList);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const chatExists = (email) =>
  //   chats?.find(
  //     (chat) => chat.users.includes(user.email) && chat.users.includes(email)
  //   );

  // const newChat = async () => {
  //   const input = prompt("Enter email of chat recipient");
  //   if (!chatExists(input) && input != user.email) {
  //     await addDoc(collection(db, "chats"), { users: [user.email, input] });
  //   }
  // };

  const showNewChatModal = (e: any) => {
    setIsChatModalOpen(true);
  };

  return (
    <div className="flex justify-center items-center h-full ">
      {isChatModalOpen && <NewChatModal />}
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
          {chatRoom.map((chatRoom, idx) => {
            return (
              // 채팅방 아이디로 구분하여 페이지 라우팅
              <Link href={`/${chatRoom.id}`}>
                <div
                  key={idx}
                  className="flex justify-start items-center bg-white shadow-lg cursor-pointer	 w-full h-10 px-4 mb-2"
                >
                  {/* 유저배열의 길이로 그룹톡과 개인톡 아이콘 삼항연산자로 분기 */}
                  {chatRoom.name.length === 1 ? (
                    <ChatIcon />
                  ) : (
                    <GroupChatIcon />
                  )}
                  <p className="pl-2">{chatRoom.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
