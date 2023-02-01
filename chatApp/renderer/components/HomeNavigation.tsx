import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserIcon from "../public/UserIcon";
import { signOut } from "firebase/auth";
import { db, firebaseAuth } from "../../firebaseconfig";
import { useRouter } from "next/router";
import { isShowNav } from "../recoil/authAtom";
import { useRecoilState } from "recoil";

function HomeNavigation() {
  const [isShowHomeNav, setIsShoHomeNav] = useRecoilState(isShowNav);

  const logOut = async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem("user");
    localStorage.removeItem("ally-supports-cache");
    router.push("/home");
    setIsShoHomeNav(false);
    console.log(isShowHomeNav);
  };

  const [userLocalStorage, setUserLocalStorage] = useState(null);
  useEffect(() => setUserLocalStorage(window.localStorage.user), []);

  const router = useRouter();

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
