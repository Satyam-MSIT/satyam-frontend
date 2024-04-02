import SideNavBar from "./Components/SideBar";
import Header from "./Components/Header";
import Landing from "./Pages/Home/Landing";

import { Routes, Route } from "react-router-dom";
import Satyam from "./Pages/Satyam/Satyam";
import Reviewer from "./Pages/Reviewer/Reviewer";
import Dashboard from "./Pages/Reviewer/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/satyam/*" element={<Satyam />} />
        <Route path="/reviewer" element={<Reviewer />} />
        <Route path="/reviewer/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
