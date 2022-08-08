import { useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    displayName: "DEFAULT",
  });

  const signup = () => {};

  const login = () => {};

  const signout = () => {};

  return {
    isLoggedIn,
    setLoggedIn,
    userInfo,
    setUserInfo,
    signup,
    login,
    signout,
  };
}
