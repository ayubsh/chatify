import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("use is", user);
  console.log("whole user is", user);

  const handlelogout = () => {
    console.log("by");
    logout();
    navigate("/login");
  };

  const userx = user ? user.substr(0, 2) : "mm";

  return (
    <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div class="font-semibold text-2xl">Chatify</div>
      <div class="w-1/2">
        {
          //<input
          //type="text"
          //name=""
          //id=""
          //placeholder="search IRL"
          //class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          // />
        }
      </div>

      <button onClick={handlelogout}>logout</button>
      <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
        {userx}
      </div>
    </div>
  );
};

export default Header;
