import React from "react";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";
interface ChatRoom {
  selectChatRoomId: number;
  // user: string[];
}
function ChatRoom({ selectChatRoomId }: ChatRoom) {
  const chatRoomDummy = [
    { chatRoomId: 1, user: ["박여울"] },
    { chatRoomId: 2, user: ["홍길동"] },
    { chatRoomId: 3, user: ["홍길동", "박여울"] },
    { chatRoomId: 4, user: ["마음이"] },
  ];
  console.log(selectChatRoomId);

  return (
    <div className="w-full scrollbar-thin scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="p-2 mb-2"></div>
      <div className="scrollbar-thin h-[300px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
        <div className="bg-btnBg  mx-4 text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
          <text>테스트메세지 상대</text>
        </div>
        <div className="flex justify-end">
          <div className="bg-white  mx-4 text-black font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg  transition duration-150 ease-in-out w-fit max-w-10 ">
            <text>테스트메세지 나</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
