import React from "react";
import Link from "next/link";

function UserList() {
  return (
    <div className="flex w-full h-screen bg-mainBg">
      <div className="flex flex-col">
        <p>⚡ 유저리스트 ⚡ -</p>

        {/* 프로필 사진 이미지 */}
        {/* <img
              alt="profile"
              src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
              className="w-1 h-1 m-2 rounded-full"
            /> */}
        <div className="w-full  bg-mainBg">
          <div className="flex items-center bg-white w-10/12 h-10 pl-2">
            <div>
              <p className="">친구</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
