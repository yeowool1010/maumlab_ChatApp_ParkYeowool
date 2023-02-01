import { atom } from "recoil";

const isModalOpen = atom({
  key: "isModalOpen",
  default: false,
});

const isShowNav = atom({
  key: "isShowNav",
  default: false,
});

export { isModalOpen, isShowNav };
