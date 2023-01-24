import React from "react";
import Link from "next/link";
import ChatIcon from "../public/ChatIcon";
import UserIcon from "../public/UserIcon";

interface User {
  email: string;
  profile: string;
}

function UserList() {
  // 프사 url있을 경우 이미지로 넣고 아니면 아이콘으로 조건부넣기
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

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col w-full px-3">
        <div className="font-bold text-xl mb-5 text-left">친구</div>
        <div className="w-full scrollbar-thin h-[400px] scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {userRoomDummy.map((le, idx) => {
            return (
              <div
                key={idx}
                className="flex shadow-lg justify-between items-center bg-white cursor-pointer	 w-full h-10 px-4 mb-2"
              >
                <div className="flex items-center">
                  {/* 유저의 프로필url이 없을 경우 기본 아이콘을 보여주는 삼항연산자 */}
                  {le.profile === "" ? (
                    <UserIcon />
                  ) : (
                    <img
                      alt="profile"
                      src={le.profile}
                      className="w-8 h-8  rounded-full"
                    />
                  )}
                  <p className="ml-3">{le.email}</p>
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
