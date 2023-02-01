import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "@firebase/firestore";
import ChatIcon from "../public/ChatIcon";
import UserIcon from "../public/UserIcon";
import Link from "next/link";

function UserList() {
  const [user, setUser] = useState([]);

  let userList = [];

  useEffect(() => {
    getDocs(collection(db, "userInfo"))
      .then((res) => {
        res.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        userList = userList.filter(
          (user) => user.name !== localStorage.getItem("user")
        );
        setUser(userList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col w-full px-3">
        <div className="font-bold text-xl mb-5 text-left">친구</div>
        <div className="w-full scrollbar-thin h-[400px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {user.map((user, idx) => {
            return (
              <Link href={`/chatRoom/${user.id}`}>
                <div
                  key={idx}
                  className="flex shadow-lg justify-between items-center bg-white cursor-pointer	 w-full h-10 px-4 mb-2"
                >
                  <div className="flex items-center">
                    {/* 유저의 프로필url이 없을 경우 기본 아이콘을 보여주는 삼항연산자 */}
                    {user.avatar === null ? (
                      <UserIcon />
                    ) : (
                      <img
                        alt="profile"
                        src={user.avatar}
                        className="w-8 h-8  rounded-full"
                      />
                    )}
                    <p key={user.name} className="ml-3">
                      {user.name}
                    </p>
                  </div>
                  <ChatIcon />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserList;
