import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Components/Button";
import axios from "axios";

import styles from "./Author.module.css";

const PaperDetails = ({
  nextStep,
  handleChange,
  formData,
  setFormData,
  tags,
  setTags,
  handleFile,
}) => {
  const { abstract, title } = formData;

  const [input, setInput] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      keywords: tags,
      uploadFile: "new",
    };
    setFormData(updatedFormData);
    nextStep();
  };

  const checkData = () => {
    if (
      formData.abstract !== "" &&
      formData.title !== "" &&
      formData.pdf !== "" &&
      tags.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const token = useSelector((state) => state.user.token);

  const save = async () => {
    try {
      const updatedFormData = {
        ...formData,
        keywords: tags,
        uploadFile: "new",
      };
      setFormData(updatedFormData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/journal/draft`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `${token}`,
            dimensions: window.screen.width + window.screen.height,
          },
        }
      );

      if (response.data.success) {
        nextStep();
      } else {
        console.error(response.data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error.response);
    }
  };

  console.log(formData);

  return (
    <div className="max-w-[1024px] mx-auto mt-6">
      <p className="text-3xl">Enter Paper Details</p>
      <div className="flex flex-col flex-wrap mt-4 mb-8">
        <label for="title" className="text-xl">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          className={styles.input}
          onChange={handleChange}
        />
        <label for="abstract" className="text-xl">
          Abstract
        </label>
        <textarea
          id="abstract"
          name="abstract"
          value={abstract}
          rows="4"
          cols="50"
          className="border border-slate-300 mb-2 text-xl p-2"
          onChange={handleChange}
        />
        <label for="myfile" className="text-xl mb-2">
          Select a file:
        </label>
        <div>
          <input
            type="file"
            id="myfile"
            name="myfile"
            className="mb-2 border w-60"
            accept=".pdf"
            onChange={handleFile}
          />
          <button className="bg-red-500 shadow text-white px-2 py-1 rounded-lg mx-2 hover:bg-red-400">
            Delete
          </button>
        </div>

        <label for="keywords" className="text-xl mb-2">
          Keywords
        </label>
        <div className=" flex">
          {tags.map((tag, index) => (
            <div
              className="bg-orange-400 text-white w-fit py-1 px-3 rounded-2xl m-1 text-xl"
              key={tag}
            >
              {tag}
              <button onClick={() => deleteTag(index)} className=" ml-3">
                x
              </button>
            </div>
          ))}
          <input
            value={input}
            placeholder="Enter a tag"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
            className="border py-1 px-2 text-lg rounded-2xl"
          />
        </div>
      </div>

      <div className="border-t-2 border-slate-200 py-4">
        {checkData() ? (
          <>
            <Button onClick={handleSubmit} className="float-end">
              Continue
            </Button>
            <Button onClick={save} className="float-end mb-8 mr-4">
              Save as Draft
            </Button>
          </>
        ) : (
          <button className={`${styles.noBtn} float-end`} disabled>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default PaperDetails;
