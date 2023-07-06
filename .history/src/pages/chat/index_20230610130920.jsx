import React from "react";

function Chat() {
  return (
    <div className="m-5 grid grid-cols-2 lg:grid-cols-5 p-3 gap-8 flex-wrap">
      <div className="col-span-2 bg-white ">Chat search</div>
      <div className="col-span-2 md:col-span-3 bg-white">User Chat</div>
    </div>
  );
}

export default Chat;
