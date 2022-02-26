import React from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
import "./App.css";

function App() {
 new EditorJS({
    holder: "editorjs",
    tools: { header: { class: Header } },
  });

  return (
    <div>
      <div id="editorjs"></div>
    </div>
  );
}

export default App;
