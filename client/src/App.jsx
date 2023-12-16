import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Chatpage from "./components/Chatpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/chat" element={<Chatpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
