import React from "react";
import Head from "next/head";
import HomeNavigation from "../components/HomeNavigation";
import ChatRoom from "../components/ChatRoom";

const Input = () => {
  return (
    <>
      <form>
        {/* <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          chat input
        </label> */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="내용을 입력하세요"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            전송
          </button>
        </div>
      </form>
    </>
  );
};

function ChatRoomPage() {
  return (
    <>
      <Head>
        <title>chatApp chatroom</title>
      </Head>
      <div className="flex flex-col h-full ">
        <div className="h-fit p-3">
          <div className="h-fit p-2 mb-2">채팅방</div>
          <ChatRoom selectChatRoomId={3} />
        </div>
      </div>
      <div className="w-full fixed bottom-0">
        <Input />
      </div>
    </>
  );
}

export default ChatRoomPage;
