import Input from "../../Components/Input";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import jsPDF from "jspdf";
import { useRef } from "react";
export default function CopyRightForm() {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [author, setAuthor] = useState(1);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  function converHTMLFileToPDF() {
    var doc = new jsPDF("l", "mm", [1200, 1210]);
    var pdfjs = ref.current;
    doc.html(pdfjs, {
      callback: function (doc) {
        doc.save("output.pdf");
      },
      x: 10,
      y: 10,
    });
  }
  return (
    <div
      className="mx-auto my-12 p-8 bg-white shadow-md max-w-4xl"
      id="copyrightform"
      ref={ref}
    >
      <h2 className="w-full text-2xl font-bold mb-4 text-center">
        DECLARATION AND COPYRIGHT TRANSFER FORM
      </h2>
      <p className="text-center font-medium mb-6">TO BE SIGNED BY THE AUTHOR</p>
      <form>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Enter Your Journal title"
            label="Title of the Journal:"
          />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Enter Manuscript title"
            label="Title of the Manuscript"
          />
        </div>
        <p className="font-medium mb-6">I hereby declare that</p>
        <ol className="list-decimal mb-6 ml-4">
          <li>
            The above manuscript, submitted for publication in the
            above-mentioned journal is NOT under consideration for publication
            elsewhere.
          </li>
          <li>
            The manuscript is NOT published in part or whole (except in the form
            of an abstract) in any journal or magazine for private or public
            circulation.
          </li>
          <li>
            I/we give consent for publication in the above-said journal in any
            media (Print, electronic, or any other), and also copying the
            above-said journal in the event of its publication in the same.
          </li>
          <li>
            I/we affirm that the manuscript does not violate the intellectual
            property rights of any third party. I/we agree to indemnify and hold
            harmless the above-said journal in respect of any claim on account
            of violation of intellectual property rights.
          </li>
          <li>
            I/we do not have any conflict of interest (financial and other)
            other than those declared.
          </li>
          <li>
            The work described in the manuscript is my/our own and my/our
            contribution to this work is significant enough to qualify
            authorship.
          </li>
          <li>
            No one who has contributed significantly to the work has been denied
            authorship and those who helped have been duly acknowledged
          </li>
          <li>
            I/we also agree to the authorship of the article in the following
            sequence:
          </li>
        </ol>
        <div className="space-y-4 mb-6">
          <p>Name of the Corresponding Author/First Author:</p>
          {[...Array(author)].map((_, i) => (
            <div>
              <input
                key={i}
                className="w-3/4 border-b-2 border-dashed outline-none"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => {
                  setAuthor((author) => (author - 1 > 0 ? author - 1 : 0));
                }}
              >
                <ImCross />
              </button>
            </div>
          ))}
          <button
            className="text-2xl"
            type="button"
            onClick={() => {
              setAuthor((author) => author + 1);
            }}
          >
            <IoIosAddCircle />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <Input type="text" placeholder="Enter Your Email" label="Email:" />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter Your Phone Number"
              label="Ph:"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <Input
              type="text"
              placeholder="Enter your Country/City"
              label="Place:"
            />
          </div>
          <div>
            <Input placeholder="Enter Date in DD/MM/YY format" label="Date:" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium" htmlFor="signature">
            Signature:
          </label>
          {file && <img src={URL.createObjectURL(file)} alt="signature" />}
          <input id="file" type="file" onChange={handleFileChange} />
        </div>
        <p className="text-sm mt-4">
          Please send the signed copy of this declaration by email to &nbsp;
          <a
            href="mailto:satyamjournal@mst.in"
            className="text-blue hover:underline"
          >
            satyamjournal@mst.in
          </a>
        </p>
      </form>
      <button onClick={converHTMLFileToPDF} className="fixed left-5 top-5">
        Download
      </button>
    </div>
  );
}
