import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkExperiance from "./components/WorkExperiance";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import ExtraInfo from "./components/ExtraInfo";
import Success from "./components/Success";

const App = () => {
  const steps = [
    "Personal Informations",
    "Work experiance",
    "Education",
    "Extra Info",
  ];
  const activeStep = useSelector((state: any) => state.step.activeStep);
  return (
    <>
      <div className="mt-8 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Resume builder
        </h2>
        <p className="mt-2 mb-12 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Let's create a resume for you!
        </p>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Paper elevation={3} className="m-8 p-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/workexp" element={<WorkExperiance />} />
            <Route path="/education" element={<Education />} />
            <Route path="/extra" element={<ExtraInfo />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </>
  );
};

export default App;
