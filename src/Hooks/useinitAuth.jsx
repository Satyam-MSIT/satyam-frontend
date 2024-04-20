// Third party modules
import { useDispatch } from "react-redux";

// User Module
import { update } from "../store/userslice";
import { getItem } from "../Functions/storage";

// info = {
//   name: "Vipul Goel",
//   email: "user@gmail.com",
//   image: "img.png",
//   default_role: "author",
//   current_role: "reviewer",
// };

const useinitAuth = () => {
  const dispatch = useDispatch();

  const info = JSON.parse(getItem("info") ?? "{}");
  const l_id = getItem("l_id");

  dispatch(update({ ...info, token: l_id }));
};

export default useinitAuth;
