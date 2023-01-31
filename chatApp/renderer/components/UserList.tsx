import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "@firebase/firestore";
import ChatIcon from "../public/ChatIcon";
import UserIcon from "../public/UserIcon";

function UserList() {
  const [user, setUser] = useState([]);

  let list = [];

  useEffect(() => {
    getDocs(collection(db, "userInfo"))
      .then((res) => {
        res.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        list = list.filter(
          (user) => user.name !== localStorage.getItem("user")
        );
        setUser(list);
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
                  <p className="ml-3">{user.name}</p>
                </div>
                <ChatIcon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserList;

// <div className="flex w-full h-screen bg-mainBg">
//   <div className="flex flex-col">
//     <p>⚡ 유저리스트 ⚡ -</p>

//     {/* 프로필 사진 이미지 */}
// {/* <img
//       alt="profile"
//       src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
//       className="w-1 h-1 m-2 rounded-full"
//     /> */}
//     <div className="w-full  bg-mainBg">
//       <div className="flex items-center bg-white w-10/12 h-10 pl-2">
//         <div>
//           <p className="">친구</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

const userRoomDummy = [
  {
    email: "qyoong3579@naver.com1",
    profile:
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
  },
  {
    email: "qyoong3579@naver.com2",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com4",
    profile:
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
  {
    email: "qyoong3579@naver.com3",
    profile: "",
  },
];
