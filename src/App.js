import React from "react";
import Mindmap from "./component/mindmap";
import "./App.css";
import WebExplore from "./component/webexplore"

function App() {
  return <>
  <div style={{width:"25vw",float:"left"}}>
   <WebExplore></WebExplore>
  </div>
  <Mindmap />

  </>;
}

export default App;
