// Third party modules
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import useinitAuth from "./Hooks/useinitAuth";
import Loader from "./Components/Loader";
import Profile from "./Pages/Reviewer/Profile";
const CopyRightForm = lazy(() => import("./Pages/Publish/Copyrightform"));
const IEEEformat = lazy(() => import("./Pages/Publish/IEEEformat"));
const GuideLines = lazy(() => import("./Pages/Publish/GuideLines"));
const Landing = lazy(() => import("./Pages/Home/Landing"));
const Satyam = lazy(() => import("./Pages/Satyam/Satyam"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));
const Reviewer = lazy(() => import("./Pages/Reviewer/Reviewer"));
const Dashboard = lazy(() => import("./Pages/Reviewer/Dashboard"));
const Author = lazy(() => import("./Pages/Author/Author"));

const App = () => {
  useinitAuth();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/satyam/*" element={<Satyam />} />
          <Route path="/author/*" element={<Author />} />
          <Route path="/reviewer" element={<Reviewer />} />
          <Route path="/guidelines" element={<GuideLines />} />
          <Route path="/ieeeformat" element={<IEEEformat />} />
          <Route path="/copyrightform" element={<CopyRightForm />} />
          <Route path="/reviewer/dashboard/:id" element={<Dashboard />} />
          <Route path="/reviewer/profile" element={<Profile />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default App;
