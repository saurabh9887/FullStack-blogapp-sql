import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ value, onChange, placeholder }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      height: 300,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1}
      onBlur={() => {}} // optional
      onChange={(newContent) => onChange(newContent)} // use this
    />
  );
};

export default TextEditor;
