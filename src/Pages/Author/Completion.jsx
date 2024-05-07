import React from "react";
import Button from "./Components/Button";
import styles from "./Author.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Completion = ({ formData, prevStep }) => {
  // console.log(formData);
  //   title, abstract, pdf, upload file, keywords
  // reviewers
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/journal/submit`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `${token}`,
            dimensions: window.screen.width + window.screen.height,
          },
        }
      );
      if (response.data.success) {
        navigate("/author");
        toast.success("Journal submitted successfully");
      } else {
        console.error(response.data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error.response);
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto mt-6">
      <h1 className="text-2xl font-medium">Review Details</h1>
      <p className="font-mono">
        Note: Please carefully check all details before submitting
      </p>
      <div className="flex flex-col flex-wrap mt-4 mb-8 ">
        <section className="p-4 rounded-md border">
          <h1 className="text-2xl ">Title</h1>
          <div className=" w-1/3 mt-2 text-xl border border-slate-400 shadow  rounded-md px-4 py-1">
            {formData.title}
          </div>
          <h1 className="text-2xl mt-4">Abstract</h1>
          <div className=" mt-2 w-1/2 text-xl border border-slate-400 shadow rounded-md px-4 py-4  ">
            {formData.abstract}
          </div>
          <h1 className="text-2xl mt-4">File</h1>
          <div className=" mt-2 w-1/3 text-xl border  border-slate-400 shadow rounded-md px-4 py-1">
            {formData.pdf.name}
          </div>

          <h1 className="text-2xl mt-4">Keywords</h1>
          <div className="mt-4 border  border-slate-400 shadow rounded w-1/3 py-1">
            {formData.keywords.map((keyword) => (
              <span className="px-4 py-2 mx-2 text-xl   ">{keyword}</span>
            ))}
          </div>
        </section>
        <section className="p-4 rounded-md border mt-4">
          <h1 className="text-2xl mt-3">Reviewers</h1>

          <div class="mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-8 w-4/5 mb-6">
            <table class="w-full text text-left rtl:text-right ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.reviewers.map((reviewer) => (
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <td className="px-6 py-2  text-gray-900  ">
                      {reviewer.name}
                    </td>
                    <td className="px-6 py-2  text-gray-900  ">
                      {reviewer.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="border-t-2 border-slate-200 py-4">
        <>
          <Button className="float-end mb-8 mr-4" onClick={handleSubmit}>
            Submit
          </Button>
        </>
        <Button onClick={prevStep} className="mr-4">
          Back
        </Button>
      </div>
    </div>
  );
};

export default Completion;
