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
      <div className="scrollbar-thin h-screen scrollbar-thumb-poinPink scrollbar-track-mainBg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <HomeNavigation />
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
};

export default App;
