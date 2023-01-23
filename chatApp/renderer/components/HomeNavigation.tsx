import React from "react";
import Head from "next/head";
import Link from "next/link";

function HomeNavigation() {
  let isLogin = false;
  return (
    <>
      <div>
        {isLogin ? (
          <>
            <div className="flex">
              <button className="btn">
                <Link href="/chat">
                  <a>채팅방목록</a>
                </Link>
              </button>
              <button className="btn">
                <Link href="/home">
                  <a>유저목록</a>
                </Link>
              </button>
              <button className="btn">
                <Link href="/login">
                  <a>로그아웃</a>
                </Link>
              </button>
            </div>
          </>
        ) : (
          <div className="flex ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/home">
                <a className="">로그인</a>
              </Link>
            </button>
            <button className="btn">
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeNavigation;
