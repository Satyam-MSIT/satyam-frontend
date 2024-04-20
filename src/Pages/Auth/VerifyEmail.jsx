// User Modules
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

// Third party modules
import { FlexCol } from "../../Elements/Flex";
import Logo from "./../../Components/Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StatusIcons from "../../Components/StatusIcons";

const VerifyEmail = () => {
  const navigate = useNavigate();

  // Getting the token out of url
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("pending");
  const [retries, setRetries] = useState(1);
  const [redirect, setRedirect] = useState(10);
  const [message, setMessage] = useState(
    "We're just confirming your email address. This shouldn't take long.",
  );

  const verifyMutate = useMutation({
    mutationFn: () =>
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/auth/confirm`, {
        headers: { token },
      }),
    mutationKey: `verify/${token}`,
  });

  const refetchMutate = useMutation({
    mutationFn: () =>
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/confirm/reset`, {
        headers: { token },
      }),
    mutationKey: `refetch/${token}`,
  });

  useEffect(() => {
    if (token) verifyMutate.mutate();
    else {
      setStatus("error");
      setMessage(
        "The link seems to be broken. Could you please double-check it?",
      );
    }
  }, []);

  if (verifyMutate.isSuccess || verifyMutate.isError) verifyMutate.reset();

  // Success State
  if (verifyMutate.isSuccess) {
    setMessage("Account verification completed successfully.");
    setStatus("success");
    setInterval(() => setRedirect((prev) => prev - 1), 1000);
  }

  // Error State
  if (verifyMutate.isError) {
    const error = verifyMutate.error;
    let message =
      "We're experiencing technical difficulties. We apologize for the inconvenience. Please try again soon";
    let curStatus = "error";

    if (error?.response?.data) {
      const statusCode = verifyMutate.error.response.status;
      if (statusCode === 401) {
        message =
          "Oops! Looks like the verification link expired. Don't worry, we've sent a fresh one to your email.";
        curStatus = "partial-success";
        refetchMutate.mutate();
      } else if (statusCode === 404) {
        message =
          "The link seems to be broken. Could you please double-check it?";
      }
    } else {
      if (retries > 0) {
        verifyMutate.mutate();
        setRetries((prev) => prev - 1);
        curStatus = "pending";
      }
    }

    setMessage(message);
    setStatus(curStatus);
  }

  if (redirect === 1) navigate("/auth/login", { replace: true });

  return (
    <main className="relative flex min-h-screen flex-col pb-4 pt-4 ">
      <Logo type="long" size={4} className="self-center" />
      <FlexCol className="absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2  gap-16 ">
        <StatusIcons className="self-center" status={status} />

        {/* TODO update the font related to it */}
        <div className="px-4 text-center xsm:px-6  sm:px-8 md:px-12">
          <h1 className="mb-4 font-mono text-base xsm:text-lg sm:text-xl">
            {message}
          </h1>
          {status === "success" && (
            <Link
              to="/auth/login"
              className=" text-sm tracking-wider text-blue xsm:text-base sm:text-lg "
            >
              Proceed to login (Redirecting in {redirect}..)
            </Link>
          )}
        </div>
      </FlexCol>
    </main>
  );
};

export default VerifyEmail;
