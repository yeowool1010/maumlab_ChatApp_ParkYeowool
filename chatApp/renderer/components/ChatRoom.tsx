import React from "react";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import GroupChatIcon from "../public/GroupChatIcon";

function ChatRoom() {
  return (
    <div className="flex justify-center items-center h-screen bg-mainBg">
      <div className="flex flex-col w-full h-screen px-3">
        <div className="font-bold text-xl mb-5 text-left">채팅</div>
        <div className="w-full bg-mainBg">
          <div className="flex justify-between items-center bg-white cursor-pointer	 w-full h-10 px-4 mb-2">
            <p className="">채팅방1</p>
            <ChatIcon />
          </div>
          <div className="flex justify-between items-center bg-white cursor-pointer	 w-full h-10 px-4 mb-2">
            <p className="">그룹채팅방</p>
            <GroupChatIcon />
          </div>
          <div className="flex justify-between items-center bg-white cursor-pointer	 w-full h-10 px-4 mb-2">
            <p className="">채팅방2</p>
            <ChatIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
