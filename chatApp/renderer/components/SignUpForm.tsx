import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { db, firebaseAuth } from "../../firebaseconfig";
import { useRouter } from "next/router";

function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeName = useCallback((e: any) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);

  const onChangeEmailCheck = useCallback((e: any) => {
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
  }, []);

  const onChangePassword = useCallback((e: any) => {
    const passwordRegex = /^().{8,50}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("8자리 이상으로 입력 해 주세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e: any) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요!");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const onSignUpSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await updateProfile(firebaseAuth.currentUser, {
        displayName: name,
      });

      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      alert(`회원가입에 성공 했습니다! 환영합니다 :)`);
      router.push("/home");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          alert("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          alert("이미 가입되어 있는 계정입니다");
          break;
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full pt-10">
        <div className="flex flex-col">
          <div className="text-center font-bold text-xl mb-5">회원가입</div>
          <form onSubmit={onSignUpSubmit}>
            <div className="mb-6">
              <input
                value={name}
                onChange={onChangeName}
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="닉네임"
              />
              <div
                className={`w-full h-5 text-sm font-bold text-right ${
                  isName ? "text-poinPink	" : "text-warning"
                }`}
              >
                {name.length > 0 && (
                  <span className={`message ${isName ? "success" : "error"}`}>
                    {nameMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <input
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

            <div className="mb-6">
              <input
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="비밀번호 확인"
              />
              <div
                className={`w-full h-5 text-sm font-bold text-right ${
                  isPasswordConfirm ? "text-poinPink	" : "text-warning"
                }`}
              >
                {passwordConfirm.length > 0 && (
                  <span
                    className={`message ${
                      isPasswordConfirm ? "success" : "error"
                    }`}
                  >
                    {passwordConfirmMessage}
                  </span>
                )}
              </div>
            </div>

            <button
              disabled={!(isEmail && isPassword && isPasswordConfirm)}
              type="submit"
              className="inline-block  bg-btnBg hover:bg-poinPink  text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              제출
            </button>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">
                아이디가 있으십니까?
              </p>
            </div>
            <Link href="/home">
              <button
                type="submit"
                className="inline-block  bg-btnBg hover:bg-poinPink  text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                로그인 페이지로
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
