import { useEffect, useState } from "react";
import NewMessage from "./NewMessage";

const Message = ({ currentRoom, currentUserId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const roomId = currentRoom._id;
      const response = await fetch(
        `http://localhost:5001/api/messages/${roomId}`,
      );
      const messages = await response.json();
      setMessages(messages);
    };
    getMessages();
  }, [currentRoom._id]);
  return (
    <div class="w-full px-5 flex flex-col justify-between">
      <div class="flex flex-col mt-5">
        {messages.map((message) => {
          console.log(message.senderId, currentUserId);
          if (message.senderId === currentUserId) {
            console.log("yay");
            return (
              <div class="flex justify-end mb-4">
                <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  {message.content}
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
            );
          } else {
            return (
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  {message.content}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div class="py-5">
        <NewMessage userId={currentUserId} roomId={currentRoom} />
      </div>
    </div>
  );
};

export default Message;
