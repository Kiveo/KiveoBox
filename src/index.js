import React from "react";
import ReactDOM from "react-dom";
import SassComponent from "./components/SassComponent";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox123</h1>
      <SassComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
