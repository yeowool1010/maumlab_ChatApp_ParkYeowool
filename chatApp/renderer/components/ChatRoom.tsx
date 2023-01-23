import React from "react";
import Link from "next/link";

function ChatRoom() {
  return (
    <div className="flex w-full h-screen bg-mainBg">
      <div className="flex flex-col">
        <p>⚡ 채팅방 리스트 ⚡ -</p>
        <div className="w-full  bg-mainBg">
          <div className="flex items-center bg-white w-10/12 h-10 pl-2">
            <div>
              <p className="">채팅방</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
