import React from "react";
import Link from "next/link";

function UserList() {
  return (
    <div className="flex">
      <div className="flex flex-col bg-red-900">
        <p>⚡ 유저리스트 ⚡ -</p>
        <div className="w-5 h-5 bg-red-900">
          <div className="flex">
            {/* 프로필 사진 이미지 */}
            {/* <img
              alt="profile"
              src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
              className="w-1 h-1 m-2 rounded-full"
            /> */}

            <div className="flex m-1">
              <p className="text-[16px] pl-1 ">이름</p>
              <p className="text-[16px] pl-1">이름</p>
              <p className="text-[16px] pl-1">이름</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
