import { VscThreeBars } from "react-icons/vsc";

import React, { useEffect, useState } from "react";

import UserChat from "../../components/chat/userChat";
import ChatsCard from "../../components/chat/chatsCard";
import chats from "../../data/chat";
import { useParams } from "react-router-dom";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState("");

  return (
    <UserChat
      messages={messages}
      selected={selected}
      setMessages={setMessages}
    />
  );
}

export default Chat;
