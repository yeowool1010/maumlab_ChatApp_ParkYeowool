import React from "react";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginState } from "../recoil/authAtom";

function HomeNavigation() {
  const loginState = useRecoilValue(isLoginState);
  let login = true;
  return (
    <>
      <div>
        {login ? (
          <>
            <div className="flex justify-around bg-mainBg p-5">
              <div>
                <button className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
                  <Link href="/chat">
                    <a>채팅방목록</a>
                  </Link>
                </button>
                <button className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
                  <Link href="/user">
                    <a>친구</a>
                  </Link>
                </button>
              </div>
              <button className="bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
                <Link href="/home">
                  <a>로그아웃</a>
                </Link>
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-around bg-mainBg p-5">
            <button className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
              <Link href="/home">
                <a className="">로그인</a>
              </Link>
            </button>
            <button className="bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
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
