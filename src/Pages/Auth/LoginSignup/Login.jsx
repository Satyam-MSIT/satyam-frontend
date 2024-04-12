import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";

import { FlexCol } from "../../../Elements/Flex";
import { Button, Header, InputElement } from "./LoginSignup";
import { loginValidator } from "../../../validators/auth";
import { init } from "../../../store/userslice";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginMutate = useMutation({ mutationFn: (promise) => promise });

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const payload = loginValidator.safeParse({
      email,
      password,
    });

    if (payload.error) {
      return Object.values(payload.error)[0].map((err) =>
        toast.error(err.message),
      );
    }

    const query = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      payload.data,
      {
        headers: {
          dimensions: window.screen.width + window.screen.height,
        },
      },
    );

    toast.promise(query, {
      pending: "Logging in",
      success: "Logged in",
      error: "Uhhh!! Something went wrong",
    });

    loginMutate.mutate(query);
  };

  if (loginMutate.isSuccess) dispatch(init(loginMutate.data));

  return (
    <FlexCol className="max-w-lg justify-center py-12 pr-12 transition-all">
      <Header
        heading="Login"
        message="Create a new account"
        route="./../signup"
        routeTo="Sign up"
      />
      <FlexCol as="form" onSubmit={loginHandler}>
        <FlexCol className="mb-4 gap-6 transition-all">
          <InputElement
            inputOptions={{
              type: "email",
              placeholder: "sahilaggarwal2004@gmail.com",
              required: true,
              ref: emailRef,
            }}
            label="Email"
            error_message="Please provide a valid email address."
          />
          <InputElement
            inputOptions={{
              type: "password",
              placeholder: "••••••••",
              minLength: 8,
              required: true,
              ref: passwordRef,
            }}
            label="Password"
            error_message="Password must be atleast 8 char long"
          />
        </FlexCol>
        <Link to="./../forgotpassword" className="mb-6 self-end text-blue">
          Forgot Password ?
        </Link>
        <Button>Login</Button>
      </FlexCol>
    </FlexCol>
  );
};

export default Login;
