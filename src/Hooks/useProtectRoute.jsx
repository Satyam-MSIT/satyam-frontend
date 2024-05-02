// Third party
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// User imports
import { storeValidator } from "../validators/store";
import getRoute from "../Functions/getRoute";

// allowedUser values
// "author" - "author"
// "reviewer" - "reviewer"
// "satyam-member","satyam-admin","satyam-chief-editor" - "satyam"

const useProtectRoute = (allowedUser) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    if (storeValidator.safeParse(user).error) {
      navigate(`/auth/login?redirect=${path}`);
      toast.error("To continue, please sign in to your account.");
    } else if (!user.current_role.includes(allowedUser)) {
      navigate(getRoute(user.current_role));
      toast.error("You are not allowed to access this page");
    }
  }, [user]);
};

export default useProtectRoute;
