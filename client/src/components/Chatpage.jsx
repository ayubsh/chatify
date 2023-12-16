import React from "react";
import Header from "./Header";
import Chatting from "./Chatting.jsx";
import Message from "./Message.jsx";

export default function Chatpage() {
  return (
    <div class="container mx-auto shadow-lg rounded-lg">
      <Header />

      <div class="flex flex-row justify-between bg-white">
        <Chatting />
        <Message />
      </div>
    </div>
  );
}
