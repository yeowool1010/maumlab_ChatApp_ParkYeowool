import { isModalOpen } from "../recoil/authAtom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { db, firebaseAuth } from "../../firebaseconfig";
import XIcon from "../public/XIcon";

interface PropsType {
  setUserName: ([]) => void;
  newChat: () => void;
}

interface userType {
  id: string;
}

function NewChatModal({ setUserName, newChat }: PropsType) {
  const [snapshot] = useCollection(collection(db, "userInfo"));
  const users = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(isModalOpen);
  const [chatRoomInput, setChatRoomInput] = useState("");
  const [isNotEmpty, setisNotEmpty] = useState(false);

  const [tagList, setTagList] = useState<Array<userType>>([]);

  const filterdUserTags =
    users &&
    users.filter((users: { id: string; name: string }) =>
      users.name.includes(chatRoomInput)
    );

  const closeModal = () => {
    setIsChatModalOpen(false);
  };
  const onChangeInput = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      setChatRoomInput(inputValue);
    } else {
      setisNotEmpty(false);
      setChatRoomInput("");
    }
  };

  const submitChatRoomInput = (e: any) => {
    e.preventDefault();

    setUserName(tagList);
    setIsChatModalOpen(false);
    setChatRoomInput("");
    // let sendtags: string = "";
    // for (let i = 0; i < tagList.length; i++) {
    //   if (i === tagList.length - 1) {
    //     sendtags += tagList[i].id;
    //   } else {
    //     sendtags += tagList[i].id + ",";
    //   }
    //   setUserName(sendtags)
    // }
  };

  useEffect(() => {
    setUserName(tagList);
  }, [tagList]);

  const Tagging = (e: any) => {
    const taggedUser = e.target.value;
    if (!tagList.includes({ id: taggedUser })) {
      const newTagList = tagList;
      newTagList.push({ id: taggedUser });

      setTagList([...newTagList]);
    }
  };

  const deleteTaggedUser = (id: string) => {
    for (let i = 0; i < tagList.length; i++) {
      if (tagList[i].id === id) {
        setTagList(
          tagList.filter((element) => {
            return element.id !== id;
          })
        );
      }
    }
  };

  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={closeModal}
          >
            <XIcon />
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              ????????? ?????????
            </h3>
            <form
              onSubmit={submitChatRoomInput}
              className="space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  ????????? ???????????? ????????? ???????????????!
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="???????????? ??????"
                  onChange={onChangeInput}
                  value={chatRoomInput}
                />
              </div>
              <div className="w-full h-full flex items-baseline flex-row flex-wrap ">
                {/* ??????????????? ????????? ????????? map */}
                {tagList &&
                  tagList.map((taggedUser, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => deleteTaggedUser(taggedUser.id)}
                        className="mr-2 mb-2 text-white pr-3 pl-2 pm-2 cursor-pointer inline-flex justify-center w-fit h-full hover:bg-red-400 bg-btnOrange rounded-full"
                      >
                        {taggedUser.id}
                        <button type="button" className="text-lg ">
                          <XIcon />
                        </button>
                      </div>
                    );
                  })}

                {/* ???????????? ????????? ????????? map */}
                {/* ?????? ?????? ??????! ????????? ????????? ???????????? */}
                {tagList.length !== 0 ? (
                  <p className="text-xs   text-white  min-w-fit">
                    ?????? ?????? ??????!
                  </p>
                ) : null}
              </div>

              <div role="menu" className={`w-full ${true ? null : "hidden"}`}>
                <div className="w-full h-full flex items-baseline flex-row flex-wrap flex-rap ">
                  {/* ??????????????? ????????? ?????? ????????? map */}
                  {filterdUserTags &&
                    filterdUserTags.map(
                      (users: { id: string; name: string }, idx) => {
                        return (
                          <button
                            onClick={Tagging}
                            type="button"
                            value={users.name}
                            key={idx}
                            className="my-1 mr-3 text-white pr-3 pl-2 pm-3 cursor-pointer inline-flex justify-center w-fit h-full  hover:bg-sky-500 bg-underbar rounded-full "
                          >
                            {users.name}
                          </button>
                        );
                      }
                    )}
                  {/* ???????????? ????????? ?????? ????????? map */}
                </div>
              </div>

              <button
                type="submit"
                onClick={newChat}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ????????? ?????????
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewChatModal;
