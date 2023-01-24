import React from "react";
import Link from "next/link";
import Head from "next/head";

function LoginForm() {
  return (
    <>
      <Head>
        <title>chatApp Login</title>
      </Head>
      <div className="flex justify-center items-center h-fit ">
        <div className="flex flex-col ">
          <div className="text-center font-bold text-xl mb-5">로그인</div>
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="이메일"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="비밀번호"
              />
            </div>

            <Link href="/user">
              <button
                type="submit"
                className="inline-block  bg-btnBg hover:bg-poinPink  text-white font-bold py-2 px-4 rounded leading-snug uppercase  shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                로그인
              </button>
            </Link>

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
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
