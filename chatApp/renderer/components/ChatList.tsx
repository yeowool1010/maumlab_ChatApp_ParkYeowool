import React from "react";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";
interface ChatRoom {
  chatRoomId: number;
  user: string[];
}

function ChatRoom() {
  const chatRoomDummy = [
    { chatRoomId: 1, user: ["박여울"] },
    { chatRoomId: 2, user: ["홍길동"] },
    { chatRoomId: 3, user: ["홍길동", "박여울"] },
    { chatRoomId: 4, user: ["마음이"] },
    { chatRoomId: 1, user: ["박여울"] },
    { chatRoomId: 2, user: ["홍길동"] },
    { chatRoomId: 3, user: ["홍길동", "박여울"] },
    { chatRoomId: 4, user: ["마음이"] },
    { chatRoomId: 1, user: ["박여울"] },
    { chatRoomId: 2, user: ["홍길동"] },
    { chatRoomId: 3, user: ["홍길동", "박여울"] },
    { chatRoomId: 4, user: ["마음이"] },
    { chatRoomId: 1, user: ["박여울"] },
    { chatRoomId: 2, user: ["홍길동"] },
    { chatRoomId: 3, user: ["홍길동", "박여울"] },
    { chatRoomId: 4, user: ["마음이"] },
  ];

  return (
    <div className="flex justify-center items-center h-full ">
      <div className="flex flex-col w-full px-3 ">
        <div className="font-bold text-xl mb-5 text-left">채팅</div>
        <div className="flex items-center justify-center ">
          <button className="w-10/12 mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
            <Link href="/chat">
              <a>채팅방만들기</a>
            </Link>
          </button>
        </div>
        <div className="scrollbar-thin h-[360px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {chatRoomDummy.map((le, idx) => {
            return (
              // 채팅방 아이디로 구분하여 페이지 라우팅
              <Link href={`/${le.chatRoomId}`}>
                <div
                  key={idx}
                  className="flex justify-start items-center bg-white shadow-lg cursor-pointer	 w-full h-10 px-4 mb-2"
                >
                  {/* 유저배열의 길이로 그룹톡과 개인톡 아이콘 삼항연산자로 분기 */}
                  {le.user.length === 1 ? <ChatIcon /> : <GroupChatIcon />}
                  <p className="pl-2">{le.user}</p>
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
