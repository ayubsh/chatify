import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children, user }) => {
  const [chatUserList, setChatUserList] = useState([]);

  useEffect(() => {
    const reqChatList = async () => {
      const response = await fetch(`http://localhost:5001/api/chats/${user}`);
      const data = await response.json();

      setChatUserList(data);
    };

    reqChatList();
  }, [user]);
  return (
    <ChatContext.Provider value={{ chatUserList }}>
      {children}
    </ChatContext.Provider>
  );
};
