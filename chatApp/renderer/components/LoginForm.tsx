import React, { FormEvent, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, firebaseAuth } from "../../firebaseconfig";
import { useRouter } from "next/router";

function LoginForm() {
  // useEffect(() => {
  //   document.getElementById("emailInput").focus();
  // }, []);
  const focusRef = useRef();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onChangePassword = (e: any) => {
    const passwordRegex = /^().{8,50}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("8자리 이상으로 입력 해 주세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  const onChangeEmailCheck = (e: any) => {
    const idRegex = /@/;

    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!idRegex.test(emailCurrent)) {
      setEmailMessage("메일 형식에 맞춰 작성 해 주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  };

  const onLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      router.push("/user");
      localStorage.setItem("user", firebaseAuth.currentUser.displayName);
      setEmail("");
      setPassword("");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          alert("잘못된 이메일 주소입니다");
          break;
      }
    }
  };

  return (
    <>
      <Head>
        <title>chatApp Login</title>
      </Head>
      <div className="flex justify-center items-center pt-10">
        <div className="flex flex-col">
          <div className="text-center font-bold text-xl mb-5">로그인</div>
          <form onSubmit={onLoginSubmit}>
            <div className="mb-6">
              <input
                id="emailInput"
                ref={focusRef}
                value={email}
                onChange={onChangeEmailCheck}
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="이메일"
              />
              <div
                className={`w-full h-5 text-sm font-bold text-right ${
                  isEmail ? "text-poinPink	" : "text-warning"
                }`}
              >
                {email.length > 0 && (
                  <span className={`message ${isEmail ? "success" : "error"}`}>
                    {emailMessage}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="비밀번호"
              />
              <div
                className={`w-full h-5 text-sm font-bold text-right ${
                  isPassword ? "text-poinPink	" : "text-warning"
                }`}
              >
                {password.length > 0 && (
                  <span
                    className={`message ${isPassword ? "success" : "error"}`}
                  >
                    {passwordMessage}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="inline-block  bg-btnBg hover:bg-poinPink  text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              로그인
            </button>
          </form>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">
              회원이 아니십니까?
            </p>
          </div>
          <Link href="/signup">
            <button
              type="submit"
              className="inline-block  bg-btnBg hover:bg-poinPink  text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
