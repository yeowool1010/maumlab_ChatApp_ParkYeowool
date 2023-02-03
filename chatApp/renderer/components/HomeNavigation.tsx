import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserIcon from "../public/UserIcon";
import { signOut } from "firebase/auth";
import { db, firebaseAuth } from "../../firebaseconfig";
import { useRouter } from "next/router";
import { isShowNav } from "../recoil/authAtom";
import { useRecoilState } from "recoil";

function HomeNavigation() {
  const router = useRouter();
  const [isShowHomeNav, setIsShoHomeNav] = useRecoilState(isShowNav);

  const logOut = async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem("user");
    localStorage.removeItem("ally-supports-cache");
    router.push("/home");
    setIsShoHomeNav(false);
  };

  const [userLocalStorage, setUserLocalStorage] = useState(null);
  useEffect(() => setUserLocalStorage(window.localStorage.user), []);

  return (
    <>
      {userLocalStorage !== null && userLocalStorage ? (
        <>
          <div className={`flex justify-around p-5 `}>
            <div className="flex items-center">
              <UserIcon />
              <div className="ml-3">{userLocalStorage}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  router.push("/chat");
                }}
                className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded"
              >
                <a>채팅방목록</a>
              </button>
              <button
                onClick={() => {
                  router.push("/user");
                }}
                className="mr-3 bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded"
              >
                <a>친구</a>
              </button>
            </div>
            <button
              onClick={logOut}
              className="bg-btnBg hover:bg-poinPink text-white font-bold py-2 px-4 rounded"
            >
              <a>로그아웃</a>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomeNavigation;
