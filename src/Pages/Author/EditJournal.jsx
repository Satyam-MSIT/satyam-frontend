import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Author.module.css";
import Button from "./Components/Button";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJournal = () => {
  const { id } = useParams();

  let initialState = {
    abstract: "",
    title: " ",
    // uploadFile: "",
    pdf: null,
    reviewers: [],
  };

  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const [formData, setFormData] = useState(initialState);
  const prevReviewers = formData.reviewers;

  const [allReviewers, setReviewers] = useState(prevReviewers);

  const token = useSelector((state) => state.user.token);

  const getJournal = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/journal/draft/${id}`,
        {
          headers: {
            token: `${token}`,
            dimensions: window.screen.width + window.screen.height,
          },
        }
      );

      if (response.data.success) {
        setJournal(response.data.journal);
      } else {
        console.error(response.data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJournal();
  }, []);

  let doc = journal._doc;

  //   from upload

  const { abstract, title } = formData;

  useEffect(() => {
    if (!loading) {
      const updatedFormData = {
        abstract: doc.abstract,
        title: doc.title,
        pdf: journal.file,
        reviewers: doc.reviewers,
        keywords: doc.keywords,
      };
      setFormData(updatedFormData);
      setTags(doc.keywords);
    }
  }, [loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0],
    });
  };

  // keywords

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

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

  // Reviewers

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

  const handleDelete = (name) => {
    const updatedReviewers = allReviewers.filter(
      (reviewer) => reviewer.name != name
    );
    setReviewers(updatedReviewers);
    setFormData({ ...formData, reviewers: updatedReviewers });
  };

  const updateForm = () => {
    //check if all values are filled
    const updatedFormData = {
      ...formData,
      keywords: tags,
      journal_id: id,
      uploadFile: "new",
    };
    setFormData(updatedFormData);
  };

  const checkData = () => {
    if (
      formData.abstract !== "" &&
      formData.title !== "" &&
      formData.pdf !== "" &&
      tags.length !== 0 &&
      formData.reviewers.name !== "" &&
      formData.reviewers.email !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(formData);

  const save = async () => {
    try {
      // const updatedFormData = {
      //   ...formData,
      //   keywords: tags,
      //   journal_id: id,
      //   uploadFile: "new",
      // };
      // setFormData(updatedFormData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/journal/draft`,
        formData,
        // updatedFormData,
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
        toast.success("Journal saved successfully");
      } else {
        console.error(response.data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <div role="status " className=" w-fit mx-auto mt-60">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center text-3xl mt-12 font-medium">Edit Journal</h1>
      <div className="max-w-[1024px] mx-auto mt-6 mb-12">
        {/* paper details*/}
        <p className="text-3xl">Enter Paper Details</p>
        <div className="flex flex-col flex-wrap mt-4 mb-8">
          <label for="title" className="text-xl font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            className={styles.input}
            onChange={handleChange}
          />
          <label for="abstract" className="text-xl font-medium">
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
          {formData.pdf && (
            <p className="text-xl mt-4">
              Keep <b>{formData.pdf.name}</b> or
            </p>
          )}
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

          <label for="keywords" className="text-xl mb-2 font-medium">
            Keywords
          </label>
          {/* keywords*/}
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
          {/* Reviewers */}
          <p className="text-3xl mt-8">Enter Reviewer Details</p>
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
            <p className="text-xl mb-6 font-medium">No Reviewers Added</p>
          )}
        </div>
        <Button onClick={addReviewer} className="w-fit">
          Add Reviewer
        </Button>

        {checkData() ? (
          <Button onClick={save} className="float-end">
            Save as Draft
          </Button>
        ) : (
          <Button onClick={updateForm}>Update Form</Button>
        )}
      </div>
    </>
  );
};

export default EditJournal;
