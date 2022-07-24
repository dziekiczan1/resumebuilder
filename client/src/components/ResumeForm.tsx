import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PersonalInfo from "./PersonalInfo";

const ResumeForm = () => {
  return (
    <Paper elevation={3} className="m-8 p-6">
      <PersonalInfo />
    </Paper>
  );
};

export default ResumeForm;
