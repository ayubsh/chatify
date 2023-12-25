import { useState } from "react";

const NewMessage = ({ roomId, userId }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const NewMessage = {
      chatRoomId: roomId._id,
      senderId: userId,
      content: message,
    };

    await fetch(`http://localhost:5001/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewMessage),
    });
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        class="w-full bg-gray-300 py-5 px-3 rounded-xl"
        type="text"
        placeholder="type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default NewMessage;
