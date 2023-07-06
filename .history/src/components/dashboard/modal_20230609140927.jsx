import React from "react";

function Modal() {
  return (
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
                <div className="card bg-white rounded-lg shadow-lg">
                  <div className="flex flex-row justify-center items-center h-28 text-sm">
                    <CiCalendarDate className="mr-4 text-3xl text-green-600 p-1 bg-green-100" />
                    <div>
                      <p className="mb-1 text-center">-/-/-</p>
                      <p className="text-xs font-thin text-gray-400">Due to</p>
                    </div>
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
  );
}

export default Modal;