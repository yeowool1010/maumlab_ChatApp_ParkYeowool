import React from "react";
import Link from "next/link";

function ChatRoom() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <p>⚡ 채팅방 리스트 ⚡ -</p>
        <div className="w-5 h-5 bg-mainBg">
          <div className="flex">
            <p className="">채팅방</p>
            <p className="">채팅방</p>
            <p className="">채팅방</p>
            <p className="">채팅방</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
