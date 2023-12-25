import React from "react";
import Header from "./Header";
import Message from "./Message.jsx";
import Chat from "./chat";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";

export default function Chatpage() {
  const { userId } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    const getChatrooms = async () => {
      const response = await fetch(`http://localhost:5001/api/chats/${userId}`);
      const rooms = await response.json();
      setRooms(rooms);
    };

    getChatrooms();
  }, [userId]);

  return (
    <div class="container mx-auto shadow-lg rounded-lg">
      <Header />
      <div class="flex flex-row justify-between bg-white">
        <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <div class="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          {rooms.map((room) => (
            <div onClick={() => setCurrentRoom(room)}>
              <Chat room={room} currentUser={userId} key={room._id} />
            </div>
          ))}
        </div>

        {currentRoom ? (
          <Message currentRoom={currentRoom} currentUserId={userId} />
        ) : (
          <div>Click Room To See Conversations</div>
        )}
      </div>
    </div>
  );
}
