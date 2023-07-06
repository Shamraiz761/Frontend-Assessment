import { VscCircleSlash } from "react-icons/vsc";
import { BsStar } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";

import React from "react";

function UserChat({ selected, messages, setMessages, open }) {
  const [message, setMessage] = React.useState("");
  const scrollRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [input, setInput] = React.useState(false);
  const [preview, setPreview] = React.useState(null);

  const sendMessage = (e) => {
    e.preventDefault();

    // scroll to bottom
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

    setMessages([
      ...messages,
      {
        senderId: 2,
        message: message,
      },
    ]);
    setMessage("");
  };

  const handleDocument = (e) => {
    console.log(e.target.files[0]);

    // type of file
    // size of file
    // name of file
    // url of file

    const typ = e.target.files[0].type;
    let link = null;
    let type = null;
    if (typ.includes("image")) {
      link = URL.createObjectURL(e.target.files[0]);
      type = "image";
    } else if (typ.includes("video")) {
      link = URL.createObjectURL(e.target.files[0]);
      type = "video";
    } else if (typ.includes("audio")) {
      link = URL.createObjectURL(e.target.files[0]);
      type = "audio";
    } else if (typ.includes("application")) {
      link = URL.createObjectURL(e.target.files[0]);
      type = "document";
    }

    setMessages([
      ...messages,
      {
        senderId: 2,
        message: link,
        type: type,
      },
    ]);

    setInput(false);
    setMessage("");

    // scroll to bottom
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex px-3 py-1.5  border-b border-gray-800 rounded-sm">
        <img
          src={"https://i.pravatar.cc/300"}
          className="h-10 w-10 rounded-full"
        />
        <div className="ml-5 flex flex-row justify-between w-full ">
          <div>
            {" "}
            <h1>{selected?.name}</h1>{" "}
            <p className="text-xs font-thin text-gray-400">
              {selected?.lastOnline}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <BsStar className="text-blue-500 mr-8" />
            <VscCircleSlash className="text-blue-500 mr-3" />
          </div>
        </div>
      </div>
      <div className="chats h-[90vh] flex flex-col justify-end  mb-[25px]">
        <div className="overflow-y-scroll flex flex-col">
          {messages.map((message, index) =>
            message?.senderId === 1 ? (
              <p
                key={index}
                className="text-sm bg-blue-400 rounded-md my-1 p-2 text-white w-1/2 clear-both mb-2"
              >
                {message.message}
              </p>
            ) : (
              <>
                {message.type == "image" && (
                  <img
                    key={index}
                    src={message.message}
                    className="w-auto max-h-[200px] rounded-md my-1 p-2 self-end"
                  />
                )}
                {!message.type && (
                  <p className="text-sm bg-gray-200 rounded-md p-2 self-end w-1/2 mb-3">
                    {message.message}
                  </p>
                )}
                {message.type == "video" && (
                  <video
                    key={index}
                    src={message.message}
                    className="w-auto max-h-[200px] rounded-md my-1 p-2 self-end"
                    controls
                  />
                )}
                {message.type == "audio" && (
                  <audio
                    key={index}
                    src={message.message}
                    className="w-auto max-h-[200px] rounded-md my-1 p-2 self-end"
                    controls
                  />
                )}
              </>
            )
          )}
          <div className="mb-[25px]" ref={scrollRef}></div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0"
        // style={{ height: "80vh" }}
      >
        <form className="" onSubmit={sendMessage}>
          <div className="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200  focus:outline-none "
              type="button"
              onClick={() => setInput(!input)}
            >
              <FiUpload />
            </button>
            {input && (
              <div
                id="dropdown"
                className="z-10 absolute bottom-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <input
                    type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={handleDocument}
                  />
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        // only for image
                        inputRef.current.accept = "image/*";
                        inputRef.current.click();
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Photo
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        // only for video
                        inputRef.current.accept = "video/*";
                        inputRef.current.click();
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Video
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        // only for audio
                        inputRef.current.accept = "audio/*";
                        inputRef.current.click();
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Finance
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        // only for document
                        inputRef.current.accept = "application/*";
                        inputRef.current.click();
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Document
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Message"
                required
                style={{ border: "none", outline: "none" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 bottom-0 right-0 z-10 py-3 px-4 text-sm font-medium text-gray-900 bg-gray-100 rounded-r-lg border "
              >
                <BiRightArrow />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserChat;
