import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import "../styles/globals.css";
import HomeNavigation from "../components/HomeNavigation";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <HomeNavigation />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
