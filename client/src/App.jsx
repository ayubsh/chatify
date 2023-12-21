import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Chatpage from "./components/Chatpage";

import { ChatProvider } from "./context/chat-context";
import { AuthContext } from "./context/auth-context";

function App() {
  const { userId } = useContext(AuthContext);
  console.log(userId);
  return (
    <ChatProvider user={userId}>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/chat" element={<Chatpage />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
}

export default App;
