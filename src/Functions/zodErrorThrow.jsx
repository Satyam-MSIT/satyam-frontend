import { toast } from "react-toastify";

const zodErrorThrow = (error) => {
  if (error) {
    Object.values(error)[0].map((err) => toast.error(err.message));
    return true;
  }
  return false;
};

export default zodErrorThrow;
