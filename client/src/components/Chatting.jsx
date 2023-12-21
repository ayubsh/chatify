import { useContext } from "react";
import { ChatContext } from "../context/chat-context";

const Chatting = () => {
  const { chatUserList } = useContext(ChatContext);
  console.log("Chatting: ", chatUserList);

  return (
    <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
      <div class="border-b-2 py-4 px-2">
        <input
          type="text"
          placeholder="search chatting"
          class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
        />
      </div>
      <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
        <div class="w-1/4">
          <img
            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
            class="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="text-lg font-semibold">MERN Stack</div>
          <span class="text-gray-500">Lusi : Thanks Everyone</span>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
