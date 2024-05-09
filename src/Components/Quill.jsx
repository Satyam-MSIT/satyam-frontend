// Third party imports
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    [{ color: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "undrline",
  "strieke",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
];

const Quill = ({ className, value, onChangeHandler }) => {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      className={className}
      onChange={onChangeHandler}
      value={value}
    />
  );
};

export default Quill;
