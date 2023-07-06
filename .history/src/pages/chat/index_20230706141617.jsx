import { VscThreeBars } from "react-icons/vsc";

import React, { useEffect, useState } from "react";

import UserChat from "../../components/chat/userChat";
import ChatsCard from "../../components/chat/chatsCard";
import chats from "../../data/chat";
import { useParams } from "react-router-dom";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setSelected(chats.find((chat) => chat.id === id));
      setMessages(chats.find((chat) => chat.id === id)?.messages || []);
    }
  }, [id]);

  return (
    <UserChat
      messages={messages}
      selected={selected}
      setMessages={setMessages}
    />
  );
}

export default Chat;
