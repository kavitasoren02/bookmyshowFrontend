import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";
import { userActions } from "../../store";
import AuthForm from "./AuthForm";
import { toast } from "react-toastify";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    console.log(data);
    toast.success("Login Successful!");
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/");
  };
  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResReceived)
      .catch((err) => toast.warn("Login Failed!"));
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
