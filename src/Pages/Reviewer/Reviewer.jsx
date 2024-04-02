import SideBar from "../../Components/SideBar";
import Dashboard from "./Dashboard";
import Manage from "./../../assets/img/icons/satyam_sidebar/manage.svg";
import Journals from "./../../assets/img/icons/satyam_sidebar/journals.svg";
import Users from "./../../assets/img/icons/satyam_sidebar/users.svg";
import List from "./List";

const Reviewer = () => {
    const links = [
        {
          icon: Manage,
          link: "manage",
          name: "Manage Website",
        },
        {
          icon: Journals,
          link: "jorunals",
          name: "Uploaded Journals",
        },
        {
          icon: Users,
          link: "users",
          name: "Manage Users",
        },
      ]
  return (
    <div className="flex">
        <SideBar className="w-[30%]" links={links} />
        {/* <Dashboard /> */}
        <List/>
    </div>
  );
};

export default Reviewer;
