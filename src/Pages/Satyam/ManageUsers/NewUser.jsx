// Third party
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

// User
import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import { Flex, FlexCol } from "../../../Elements/Flex";
import newUserValidator from "../../../validators/newUser";
import zodErrorThrow from "../../../Functions/zodErrorThrow";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "axios";
import StatusIcons from "../../../Components/StatusIcons";
import { Center } from "../../../Elements/Center";

const roleOptions = [
  { label: "Admin", value: "satyam-admin" },
  { label: "Chief Editor", value: "satyam-chief-editor" },
  { label: "Member", value: "satyam-member" },
];

const NewUser = ({ hideModalHandler }) => {
  const user = useSelector((state) => state.user);
  const [status, setStatus] = useState("form"); //"form" or "status"
  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  const newUserMutation = useMutation({ mutationFn: (promise) => promise });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const type = roleRef.current.value;

    const payload = newUserValidator.safeParse({ name, email, type });

    if (zodErrorThrow(payload.error)) return;

    const query = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
      { password: "testpassword", ...payload.data },
      {
        headers: {
          token: user.token,
          dimensions: window.screen.width + window.screen.height,
        },
      }
    );

    newUserMutation.mutate(query);
    setStatus("loading");
  };

  if (newUserMutation.isError) {
    setStatus("error");
    newUserMutation.reset();
  }

  if (newUserMutation.isSuccess) {
    setStatus("success");
    newUserMutation.reset();
  }

  return (
    <div className="px-8 pt-4 pb-8 max-w-[40rem] w-[90vw] max-h-[75vh] overflow-y-auto no-scrollbar">
      {status === "form" && (
        <>
          <Flex className="items-start gap-12 justify-between border-b-2 border-gray-200 pb-4">
            <div>
              <h1 className="text-lg font-bold mb-1">ADD NEW USER</h1>
              <p className="text-sm tracking-wide text-gray-500">
                Enter user details and we'll send a verification email to confirm account.
              </p>
            </div>
            <IoClose className="text-3xl" onClick={hideModalHandler} />
          </Flex>
          <h2 className="my-2 text-base font-medium">USER INFORMATION</h2>
          <FlexCol as="form" className="gap-4" onSubmit={formSubmitHandler}>
            <Input placeholder="Sahil aggarwal" ref={nameRef} label="Name" error_message="Please provide the name." />
            <Input
              type="email"
              placeholder="sahilaggarwal2004@gmail.com"
              ref={emailRef}
              label="Email"
              error_message="Please provide a valid email address."
            />

            <Select
              options={roleOptions}
              id="role"
              ref={roleRef}
              label={"Select a user"}
              defaultValue="satyam-member"
            />
            <div className="grid grid-cols-[1fr_1fr] items-center gap-4 justify-center mt-2">
              <button type="submit" className="bg-blue-600 rounded-2xl  text-white py-3">
                Add New User
              </button>
              <button
                type="button"
                onClick={hideModalHandler}
                className="border-blue-600 border-[1px] tracking-wide  rounded-2xl  py-3">
                Cancel
              </button>
            </div>
          </FlexCol>
        </>
      )}
      {status !== "form" && (
        <FlexCol>
          <h2></h2>
          <Center className="py-12">
            {status === "loading" && <StatusIcons status="pending" />}
            {status === "error" && <StatusIcons status="error" />}
            {status === "success" && <StatusIcons status="success" />}
          </Center>
        </FlexCol>
      )}
    </div>
  );
};

export default NewUser;
