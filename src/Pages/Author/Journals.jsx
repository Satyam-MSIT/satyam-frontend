import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Journals = () => {
  const [data, setData] = useState([]);

  const token = useSelector((state) => state.user.token);

  const getJournals = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/journal/all`,
        {
          headers: {
            token: `${token}`,
            dimensions: window.screen.width + window.screen.height,
          },
        }
      );

      if (response.data.success) {
        setData(response.data.journals);
      } else {
        console.error(response.data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error.response);
    }
  };

  useEffect(() => {
    getJournals();
  }, []);

  console.log("data", data);
  return (
    <>
      <div className="max-w-[1240px] mx-auto mt-12 ">
        <h1 className="text-2xl font-bold text-center">Journals</h1>

        {data.length > 0 ? (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table class="w-full text text-left rtl:text-right ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Journal Title
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Keywords
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PDF Link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reviewers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Journal Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((journal) => (
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {journal.title}
                    </th>

                    <td className="px-6 py-4">{journal.keywords}</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">John</td>
                    <td className="px-6 py-4">{journal.status}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        to={`${journal.journal_id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-3xl text-center mt-8">No Journals Found</h1>
        )}
      </div>
    </>
  );
};

export default Journals;
