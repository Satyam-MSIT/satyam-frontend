// Third party
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

// User imports
import { FlexCol, Flex } from "../../../Elements/Flex";
import { Header, InputElement, Button } from "./LoginSignup";
import { signupValidator } from "../../../validators/auth";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const alternateEmailRef = useRef();
  const passwordRef = useRef();

  const signupMutate = useMutation({ mutationFn: (promise) => promise });

  const signupHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const alternateEmail = alternateEmailRef.current.value || undefined;
    const password = passwordRef.current.value;

    const payload = signupValidator.safeParse({
      name,
      email,
      alternateEmail,
      password,
    });

    if (payload.error) {
      return Object.values(payload.error)[0].map((err) =>
        toast.error(err.message),
      );
    }

    const query = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
      { fname: name, lname: "temp", type: "author", ...payload.data },
    );

    toast.promise(query, {
      pending: "Signing up",
      success: "Signup successful",
      error: "Uhhh!! Something went wrong",
    });

    signupMutate.mutate(query);
  };

  if (signupMutate.isSuccess) console.log("Success");

  return (
    <FlexCol className="max-w-lg justify-center py-12 pr-12 transition-all">
      <Header
        heading="Sign Up"
        message="Have an account"
        route="./../login"
        routeTo="Login"
      />
      <FlexCol as="form" onSubmit={signupHandler}>
        <FlexCol className="mb-4 gap-4 transition-all">
          <InputElement
            inputOptions={{
              type: "text",
              placeholder: "Sahil aggarwal",
              required: true,
              ref: nameRef,
            }}
            label="Name"
            error_message="Please provide the name."
          />
          <InputElement
            inputOptions={{
              type: "email",
              placeholder: "sahilaggarwal2004@gmail.com",
              ref: emailRef,
            }}
            label="Email"
            error_message="Please provide a valid email address."
          />{" "}
          <InputElement
            inputOptions={{
              type: "email",
              placeholder: "sahilaggarwal2004@gmail.com",
              ref: alternateEmailRef,
            }}
            label="Alternate Email"
            error_message="Please provide a valid email address."
          />
          <InputElement
            inputOptions={{
              type: "password",
              placeholder: "••••••••",
              minLength: 8,
              ref: passwordRef,
            }}
            label="Password"
            error_message="Password must be atleast 8 char long"
          />
        </FlexCol>
        <Flex className="mb-4 gap-4">
          <input type="checkbox" id="terms" required className="w-4" />
          <label htmlFor="terms">
            I agree to the{" "}
            <Link to="/terms" className="text-blue underline">
              terms & conditions
            </Link>
          </label>
        </Flex>
        <Button>Sign Up</Button>
      </FlexCol>
    </FlexCol>
  );
};

export default Signup;
