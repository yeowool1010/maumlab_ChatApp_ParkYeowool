import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import UserIcon from "../public/UserIcon";

function HomeNavigation() {
  // 로컬스토리지의 토큰 여부를 확인하여 로그인상태관리
  // 로그인 상태는 전역에서 사용되므로 리코일로 관리
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  // 임시 로그인허용 상태
  let login = true;
  return (
    <>
      <div>
        {login ? (
          <>
            <div className="flex justify-around  p-5">
              <div className="flex items-center">
                <UserIcon />
                <p className="ml-3">박여울</p>
              </div>
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
          <></>
          // <div className="flex justify-around bg-mainBg p-5">
          //   <button className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
          //     <Link href="/home">
          //       <a className="">로그인</a>
          //     </Link>
          //   </button>
          //   <button className="bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded">
          //     <Link href="/signup">
          //       <a>회원가입</a>
          //     </Link>
          //   </button>
          // </div>
        )}
      </div>
    </>
  );
}

export default HomeNavigation;
