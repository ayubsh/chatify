import { useEffect, useState } from "react";

const Chat = ({ room, currentUser }) => {
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const friendId = room.members.find((member) => member !== currentUser);
      const response = await fetch(
        `http://localhost:5000/api/users/${friendId}`,
      );
      const f = await response.json();
      console.log(f);
      setFriend(f);
    };

    getUser();
  }, [currentUser]);
  return (
    <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
      <div class="w-1/4">
        <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          {friend?.Username.substr(0, 2)}
        </div>
      </div>
      <div class="w-full">
        <div class="text-lg font-semibold">{friend?.Username}</div>
        {/*<span class="text-gray-500">Lusi : Thanks Everyone</span> */}
      </div>
    </div>
  );
};

export default Chat;
