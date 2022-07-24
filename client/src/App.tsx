import React from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";

const App = () => {
  return (
    <div>
      <div>
        <h1>Your Resume!</h1>
        <p>Please fill in the form.</p>
        <hr />
      </div>
      <ResumeForm />
    </div>
  );
};

export default App;
