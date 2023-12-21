import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //set default as null
  const [user, setUser] = useState(null);
  const [jwt_token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("id");

    if (storedUser) setUser(storedUser);

    if (storedToken) setToken(storedToken);

    if (storedId) setUserId(storedId);
  }, []);

  const register = async (userBody) => {
    const data = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userBody),
    });

    const datajson = await data.json();
    console.log(datajson);
    setUser(datajson.user.Username);
    setUserId(datajson.user.id);
    setToken(datajson.token);
    console.log(
      "----------------------------------------------------",
      datajson,
    );

    localStorage.setItem("token", datajson.token);
    localStorage.setItem("user", datajson.user.Username);
    localStorage.setItem("id", datajson.user.id);
  };

  const login = async (userBody) => {
    const data = await fetch("http://localhost:5000/api/singin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userBody),
    });

    const datajson = await data.json();

    console.log("res data", datajson);
    setUser(datajson.user.Username);
    setUserId(datajson.user.id);
    setToken(datajson.token);

    localStorage.setItem("token", datajson.token);
    localStorage.setItem("user", datajson.user.Username);
    localStorage.setItem("id", datajson.user.id);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("id");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, jwt_token, login, logout, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
