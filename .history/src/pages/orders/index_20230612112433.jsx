import React from "react";

import profile from "../../assets/images/Ellipse 1631.png";

function Orders() {
  return (
    <div className="m-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input type="checkbox" className="mr-1 focus:bg-none " />
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                {" "}
                <div className="flex flex-row ">
                  <img src={profile} className="w-10 h-10" />
                  <div className="ml-2">
                    <h1 className=" text-xs font-medium text-gray-900  ">
                      Muhammad Shamraiz
                    </h1>
                    <p
                      className=" text-gray-400 font-thin "
                      style={{ fontSize: "10px" }}
                    >
                      shamirajpoot761@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">Website SEO</td>
              <td className="px-6 py-4 ">
                <span className="bg-green-100 rounded-lg px-2 py-1">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
