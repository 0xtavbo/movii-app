import axios from "axios";
import { useState } from "react";

const useAxiosLogin = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const postLoginUser = async (email, password) => {
    try {
      await axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          const tokenReceived = res.data.token;
          localStorage.setItem("token", tokenReceived);
          setLoginSuccess(true);
        });
    } catch (err) {
      setLoginSuccess(false);
    }
  };

  return { loginSuccess, postLoginUser };
};

export default useAxiosLogin;
