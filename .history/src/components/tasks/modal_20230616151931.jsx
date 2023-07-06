import { CiCalendarDate } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { TbChecklist } from "react-icons/tb";
import { BsArrowRightShort, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { RiBarChart2Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import React, { useState } from "react";
import { GoReply } from "react-icons/go";

import profile from "../../assets/images/Ellipse 1631.png";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleDueDate = () => {
    setOpen(!open);
  };
  const toggleUser = () => {
    setUser(!user);
  };
  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-white flex flex-row justify-center text-blue-500 rounded-lg border border-dashed border-blue-500 px-2 py-2 text-sm w-full"
        type="button"
      >
        <AiOutlinePlusCircle className="mr-2 mt-1" />
        <h1>Add List</h1>
      </button>
      {isModalOpen && (
        <div className="fixed  top-0 left-0 right-0 bottom-0 z-50   bg-opacity-50 bg-black">
          <div className="  min-h-screen flex items-center justify-center ">
            <div className="absolute w-9/12 ml-40 bg-slate-50 rounded-lg shadow p-8">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                  <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
                    <div className="card bg-white rounded-lg shadow-lg">
                      <div className="flex flex-row justify-center items-center h-28 text-sm">
                        <CiCalendarDate className="mr-4 text-3xl text-blue-600 p-1 bg-blue-100" />
                        <div>
                          <p className="mb-1 text-center">6/7/23</p>
                          <p className="text-xs font-thin text-gray-400">
                            Created Date
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-white rounded-lg shadow-lg">
                      <div className="flex flex-row justify-center items-center h-28 text-sm">
                        <FaRegUser className="mr-4 text-3xl text-purple-600 p-1 bg-purple-100" />
                        <div>
                          <p className="mb-1 text-center">6/7/23</p>
                          <p className="text-xs font-thin text-gray-400">
                            Created Date
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <button onClick={toggleDueDate}>
                          <div className="card bg-white rounded-lg shadow-lg w-[220px]">
                            <div className="flex flex-row justify-center items-center h-28 text-sm">
                              <CiCalendarDate className="mr-4 text-3xl text-green-600 p-1 bg-green-100" />
                              <div>
                                <p className="mb-1 text-center">-/-/-</p>
                                <p className="text-xs font-thin text-gray-400">
                                  Due to
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                        {open && (
                          <div className="absolute top-full bg-white rounded-md w-40   m-2">
                            <input
                              type="text"
                              className="text-sm text-center outline-none text-gray-700 py-2 rounded-md hover:bg-gray-200"
                              placeholder="Set Due Date"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-full p-8 mt-3 ">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                    <div className="my-5">
                      <div className="my-2 flex flex-row">
                        <TbChecklist className="text-blue-500 mt-1" />
                        <p className="mx-2  text-sm font-medium text-gray-900">
                          Checklist
                        </p>
                        <button>
                          {" "}
                          <AiOutlinePlusCircle className="text-blue-500 " />
                        </button>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                          <input
                            type="checkbox"
                            className="mr-4 text-sm rounded-sm "
                          />
                          <label
                            for="message"
                            className="block mb-2 text-xs  text-gray-400 font-thin  "
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </label>
                        </div>
                        <div className="group inline-block">
                          <button className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32">
                            <span className="pr-1 font-semibold flex-1">
                              {" "}
                              <BsThreeDotsVertical />
                            </span>
                          </button>
                          <ul
                            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                          >
                            <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row text-sm items-center text-gray-700">
                              <MdOutlineModeEdit className="text-blue-500 mr-3" />{" "}
                              Rename
                            </li>

                            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100  text-sm  text-gray-700">
                              <button
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                                onClick={toggleUser}
                              >
                                <span className="pr-1 flex-1 flex flex-row items-center">
                                  <BiUserPlus className="text-blue-500 mr-3" />
                                  Assign to
                                  {!user && (
                                    <ul
                                      className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
transition duration-150 ease-in-out origin-top min-w-32 w-40 text-center ml-32 mt-5 "
                                    >
                                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row items-center">
                                        <img
                                          src={profile}
                                          className="w-6 h-6 mr-3 "
                                        />{" "}
                                        Person 1
                                      </li>

                                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row items-center">
                                        <img
                                          src={profile}
                                          className="w-6 h-6 mr-3 "
                                        />{" "}
                                        Person 2
                                      </li>

                                      <li
                                        className="rounded-sm px-3 py-1 my-1 text-xs hover:bg-gray-100 flex flex-row items-center text-blue-500"
                                        onClick={toggleAdd}
                                      >
                                        <AiOutlinePlusCircle className="mr-3" />
                                        Add New User
                                        {isModalOpen && (
                                          <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex items-center min-h-screen justify-center  bg-opacity-50 bg-black">
                                            <div className="   flex items-center justify-center ">
                                              <div className="   bg-slate-50 rounded-lg shadow p-8 w-72 md:w-[450px]">
                                                <div className="">
                                                  <h1 className="text-xs md:text-base text-gray-700 mb-2">
                                                    Invite Admins with their
                                                    email
                                                  </h1>
                                                  <div className="flex flex-row justify-between flex-wrap ">
                                                    <input
                                                      type="text"
                                                      className="bg-gray-300 text-gray-600 shadow rounded-md  w-72"
                                                    />
                                                    <button
                                                      onClick={toggleModal}
                                                      type="button"
                                                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-3 md:m-0  "
                                                    >
                                                      Invite
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </li>
                                    </ul>
                                  )}
                                </span>
                                <span className="mr-auto">
                                  <BsArrowRightShort />
                                </span>
                              </button>
                            </li>
                            <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row text-sm items-center text-gray-700">
                              <AiOutlineDelete className="text-blue-500 mr-3" />{" "}
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="my-3">
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                          <FaRegCommentDots className="mr-2 mt-1 text-blue-500" />
                          <h1 className=" text-sm font-medium text-gray-900">
                            Comments
                          </h1>
                        </div>
                        <div className="group inline-block">
                          <button className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32">
                            <span className="pr-1 font-semibold flex-1">
                              {" "}
                              <BsThreeDotsVertical />
                            </span>
                          </button>
                          <ul
                            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                          >
                            <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row text-sm items-center text-gray-700">
                              <MdOutlineModeEdit className="text-blue-500 mr-3" />{" "}
                              Edit Name
                            </li>

                            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100  text-sm  text-gray-700 flex flex-row">
                              <GoReply className="text-blue-500 mr-3" />
                              Reply
                            </li>
                            <li className="rounded-sm px-3 py-1 hover:bg-gray-100 flex flex-row text-sm items-center text-gray-700">
                              <AiOutlineDelete className="text-blue-500 mr-3" />{" "}
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
                      <input
                        className="w-full bg-gray-100 text-gray-400 p-2 mt-2 rounded-md text-sm font-light"
                        placeholder="Your comment here..."
                      />
                    </div>
                    <div>
                      <div className="mt-5 flex flex-row justify-between">
                        <div className="flex flex-row ">
                          <RiBarChart2Line className="mr-2 mt-1 text-blue-500" />
                          <h1 className=" text-sm font-medium text-gray-900">
                            Activity
                          </h1>
                        </div>
                        <a className="text-blue-500 underline">show</a>
                      </div>

                      <div className="mt-2 flex flex-row justify-between">
                        <div className="flex flex-row ">
                          <img src={profile} className="w-8 h-8" />
                          <h1 className=" text-xs font-medium text-gray-900 ml-2 mt-2">
                            Muhammad Shamraiz
                          </h1>
                          <p className="text-xs text-gray-400 font-thin ml-1 mt-2">
                            Added cover for task 1
                          </p>
                        </div>
                        <p className="text-gray-400 text-xs font-thin">
                          23-April-2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end  pt-2">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
