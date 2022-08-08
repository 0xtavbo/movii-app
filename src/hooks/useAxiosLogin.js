import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/userSlice";

const useAxiosLogin = () => {
  const [authToken, setAuthToken] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useDispatch();

  const postLoginUser = async (email, password) => {
    try {
      await axios
        .post("https://reqres.in/api/login", { email, password })
        .then((res) => {
          const tokenReceived = res.data.token;
          setAuthToken(tokenReceived);
        });
    } catch (err) {
      console.log("Error useAxiosLogin");
      setLoginSuccess(false);
    }
  };

  useEffect(() => {
    if (authToken !== "") {
      dispatch(signIn({ authToken }));
      setLoginSuccess(true);
      console.log("Login successfully", loginSuccess, authToken);
    }
  }, [authToken]);

  return { loginSuccess, postLoginUser };
};

export default useAxiosLogin;
