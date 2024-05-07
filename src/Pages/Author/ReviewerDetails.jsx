import React, { useState } from "react";
import Button from "./Components/Button";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";

import styles from "./Author.module.css";

const ReviewerDetails = ({ nextStep, formData, prevStep, setFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const prevReviewers = formData.reviewers;
  const [allReviewers, setReviewers] = useState(prevReviewers);
  const addReviewer = (e) => {
    e.preventDefault();
    const newReviewer = {
      name: name,
      email: email,
    };

    const updatedReviewers = [...allReviewers, newReviewer];
    setReviewers(updatedReviewers);

    setFormData({
      ...formData,
      reviewers: updatedReviewers,
    });

    setName("");
    setEmail("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const checkData = () => {
    if (formData.reviewers.name !== "" && formData.reviewers.email !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleDelete = (name) => {
    const updatedReviewers = allReviewers.filter(
      (reviewer) => reviewer.name != name
    );
    setReviewers(updatedReviewers);
    setFormData({ ...formData, reviewers: updatedReviewers });
  };

  return (
    <div className="max-w-[1024px] mx-auto mt-16 ">
      <p className="text-3xl">Enter Reviewer Details</p>
      <div className="flex flex-col flex-wrap mt-4 mb-8">
        <label for="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          className={styles.input}
          onChange={handleNameChange}
        />
        <label for="name" className="text-xl">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="someone@email.com"
          className={styles.input}
          onChange={handleEmailChange}
        />
      </div>

      {allReviewers.length > 0 ? (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 w-4/5 mb-6">
          <table class="w-full text text-left rtl:text-right ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {allReviewers.map((reviewer) => (
                <tr className="bg-white border-b  hover:bg-gray-50 ">
                  <td className="px-6 py-2  text-gray-900  ">
                    {reviewer.name}
                  </td>
                  <td className="px-6 py-2  text-gray-900  ">
                    {reviewer.email}
                  </td>
                  <td
                    className="  text-gray-900  "
                    onClick={() => handleDelete(reviewer.name)}
                  >
                    <DeleteIcon className="text-xl hover:cursor-pointer hover:text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl mb-20 font-medium">No Reviewers Added</p>
      )}

      <div className="border-t-2  border-slate-200 py-4">
        <Button onClick={prevStep} className="mr-4">
          Back
        </Button>
        {checkData() ? (
          <Button onClick={addReviewer}>Add Reviewer</Button>
        ) : (
          <button className={styles.noBtn} disabled>
            Add Reviewer
          </button>
        )}
        {allReviewers.length > 0 ? (
          <>
            {" "}
            <Button className="float-end mb-8" onClick={handleSubmit}>
              Finish
            </Button>
            <Button className="float-end mb-8 mr-4">Save as Draft</Button>
          </>
        ) : (
          <button className={`${styles.noBtn} float-end mb-8`} disabled>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewerDetails;
