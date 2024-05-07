import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const JournalDetail = () => {
  const { id } = useParams();

  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="max-w-[1240px] mx-auto mt-12">
        <h1 className="text-2xl font-semibold">Journal #{id}</h1>
        <Link
          to={`/author/journals/edit/${id}`}
          className="px-4  py-1 bg-red-500 hover:bg-red-400 text-white rounded"
        >
          Edit
          {/* for already existing journal you need to send journal_id to update it and not create a new one */}
        </Link>
        {doc.title && (
          <div className="flex flex-col flex-wrap mt-4 mb-8 ">
            <section className="p-4 rounded-md border">
              <h1 className="text-2xl ">Title</h1>
              <div className="  text-slate-800 w-1/3 mt-2 text-xl border bg-white  shadow  rounded-md px-4 py-1">
                {doc.title}
              </div>
              <h1 className="text-2xl mt-4">Abstract</h1>
              <div className="  text-slate-800  w-1/3 mt-2 text-xl border bg-white  shadow  rounded-md px-4 py-1 ">
                {doc.abstract}
              </div>
              <h1 className="text-2xl mt-4">File</h1>
              <div className=" text-slate-800  m w-1/3 mt-2 text-xl bg-white border shadow  rounded-md px-4 py-1">
                {journal.file.name}
              </div>

              <h1 className="text-2xl mt-4">Keywords</h1>
              <div className="mt-4 border text-slate-800   shadow bg-white rounded w-1/3 py-1">
                {doc.keywords.map((keyword) => (
                  <span className="px-4 py-2 mx-2 text-xl ">{keyword}</span>
                ))}
              </div>
            </section>
            <section className="p-4 rounded-md border mt-4">
              <h1 className="text-2xl mt-3">Reviewers</h1>

              {doc.reviewers.length !== 0 ? (
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
                      {doc.reviewers.map((reviewer) => (
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
              ) : (
                <h1 className="text-xl ">No Reviewers added!</h1>
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default JournalDetail;
