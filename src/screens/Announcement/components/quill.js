import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({onChange=()=>false,value=""})=>{
    const modules = {
        toolbar: [
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          ["clean"]
        ]
      };
      const formats = [
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "align",
        "color",
        "background"
      ];
    return(
        <div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={onChange}
          value={value}
        />
      </div>
    )
}
export default RichTextEditor
