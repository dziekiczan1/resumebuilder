import React from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const App = () => {
  const steps = ["Personal Informations", "Work experiance", "Create an ad"];

  return (
    <>
      <div className="mt-8 lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Resume builder
        </h2>
        <p className="mt-2 mb-12 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Let's create a resume for you!
        </p>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <ResumeForm />
    </>
  );
};

export default App;
