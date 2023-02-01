import React, { useState, useEffect, useRef } from "react";
import { db, firebaseAuth } from "../../firebaseconfig";
import {
  doc,
  collection,
  serverTimestamp,
  setDoc,
  addDoc,
} from "@firebase/firestore";

const ChatInput = ({ id, user }) => {
  const [msg, setMsg] = useState("");

  const handleOnChange = (e: any) => {
    setMsg(e.target.value);
  };

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, `chatRoom/${id}/messages`), {
      text: msg,
      sender: user.displayName,
      timestamp: serverTimestamp(),
    });
    setMsg("");
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            value={msg}
            onChange={handleOnChange}
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="내용을 입력하세요"
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

export default ChatInput;
