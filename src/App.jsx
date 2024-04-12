import Landing from "./Pages/Home/Landing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Satyam from "./Pages/Satyam/Satyam";
import Reviewer from "./Pages/Reviewer/Reviewer";
import Dashboard from "./Pages/Reviewer/Dashboard";
import Auth from "./Pages/Auth/Auth";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Page is loading</h1>}>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/satyam/*" element={<Satyam />} />
          <Route path="/reviewer" element={<Reviewer />} />
          <Route path="/reviewer/dashboard/:id" element={<Dashboard />} />
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
