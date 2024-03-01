import React, { useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Delta from "quill-delta";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface Props {
  desc: string;
  setSummary: (description: any) => void;
}

const QuillEditor = ({ desc, setSummary }: any) => {
  const [editorValue, setEditorValue] = useState("");
  const [editorHeight, setEditorHeight] = useState(150);
  const [editorState, setEditorState] = useState("");
  // useEffect(() => {
  //   console.log("quill", desc);
  // }, [desc]);

  const convertHTMLToString = (htmlContent: any) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = htmlContent;
    return temporaryElement.textContent || temporaryElement.innerText || "";
  };
  const handleChange = (content: any, delta: any, source: any, editor: any) => {
    // setSummary(editor.getHTML());
    // setSummary("lkjsdlfkj");
    // setSummary(convertHTMLToString(content));
    setSummary(content);
    // console.log("sala", content);
  };

  return (
    <div className="mb-10">
      <ReactQuill
        value={desc}
        style={{ height: editorHeight }}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuillEditor;
