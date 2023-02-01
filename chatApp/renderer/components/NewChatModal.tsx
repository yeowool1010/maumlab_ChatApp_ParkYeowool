import { isModalOpen } from "../recoil/authAtom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { db, firebaseAuth } from "../../firebaseconfig";

interface PropsType {
  setUserName: (userName: string) => void;
  newChat: () => void;
}

function NewChatModal({ setUserName, newChat }: PropsType) {
  const [snapshot, loading, error] = useCollection(collection(db, "userInfo"));
  const users = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(users);
  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(isModalOpen);
  const [chatRoomInput, setChatRoomInput] = useState("");

  const closeModal = () => {
    setIsChatModalOpen(false);
  };
  const onChangeInput = (e: any) => {
    setChatRoomInput(e.target.value);
  };

  const submitChatRoomInput = (e: any) => {
    e.preventDefault();
    // 본인은 대화상대로 추가 할 수 없도록
    if (
      chatRoomInput !== localStorage.getItem("user") &&
      chatRoomInput !== ""
    ) {
      setUserName(chatRoomInput);
      setIsChatModalOpen(false);
      setChatRoomInput("");
    }
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={closeModal}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              채팅방 만들기
            </h3>
            <form
              onSubmit={submitChatRoomInput}
              className="space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  친구를 검색해서 대화를 시작하세요!
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="이름으로 검색"
                  onChange={onChangeInput}
                  value={chatRoomInput}
                />
              </div>

              <button
                type="submit"
                onClick={newChat}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                채팅방 만들기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewChatModal;
