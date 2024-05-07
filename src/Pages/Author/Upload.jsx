import React from "react";
import { useState } from "react";
import PaperDetails from "./PaperDetails";
import ReviewerDetails from "./ReviewerDetails";
import Completion from "./Completion";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [tags, setTags] = useState([]);

  const initialState = {
    abstract: "",
    title: "",
    // uploadFile: "",
    pdf: null,
    reviewers: [],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReviewers = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      reviewers: {
        ...formData.reviewers,
        [name]: value,
      },
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0],
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <h1 className="text-3xl text-blue font-bold text-center mt-6 ">
        Upload Journal
      </h1>
      <div>
        {step == 1 && (
          <PaperDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            tags={tags}
            setTags={setTags}
            handleFile={handleFile}
          />
        )}
        {step == 2 && (
          <ReviewerDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleReviewers={handleReviewers}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step == 3 && (
          <Completion
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleReviewers={handleReviewers}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Upload;
