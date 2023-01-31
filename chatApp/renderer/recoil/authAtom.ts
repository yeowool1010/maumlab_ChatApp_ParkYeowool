import { atom } from "recoil";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { firebaseAuth } from "../../firebaseconfig";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;
// const [user] = useAuthState(firebaseAuth);

const isLoginState = atom({
  key: "isLogin",
  default: localStorage?.getItem("user") ? true : false,
});

// const accessTokenState = atom({
//   key: "token",
//   default: localStorage?.getItem("token") || "",
// });

// const userNameState = atom({
//   key: "userName",
//   default: user.displayName || "",
// });
// const userNameState = atom({
//   key: "userName",
//   default: localStorage?.getItem("user") || "",
// });

export { isLoginState };
