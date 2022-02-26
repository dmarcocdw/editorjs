import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  
  const [editorReady, toggleReady] = useState(false);
  const editorElement = document.getElementById('editorjs')
  if (editorElement){
    
  }
  // const [editorInstance, setInstance] = useState({})
  useEffect(() => {

    // const editor = new EditorJS({
    //   holder: 'editorjs',
    //   tools: {
    //     header: {
      
    //       inlineToolbar : true
    //     }
    //   }
    // })
    // console.log(editor)
    // setInstance(editor)
    toggleReady(true)
    
    return () => {
      
    }
  }, [])
  

  return editorReady ? <div style={{minHeight: "1000px", minWidth: "100%"}} id="editorjs"></div> : <></>;
};

export default Home;
