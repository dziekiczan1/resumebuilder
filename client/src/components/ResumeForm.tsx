import React, { useState } from "react";
import axios from "axios";
import saveAs from "file-saver";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ResumeForm = () => {
  const [name, setName] = useState({
    name: "Name",
    surname: "Surname",
  });

  const nextStep = (e: any) => {
    e.preventDefault();

    const data = { name: name };

    axios
      .post("http://localhost:5000/resume-createpdf", data)
      .then(() =>
        axios.get("http://localhost:5000/resume-fetchpdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "Resume.pdf");
      });

    e.target.reset();
  };

  return (
    <Paper elevation={3} className="m-8 p-6">
      <form onSubmit={nextStep}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue={name.name}
          onChange={(e) => setName({ ...name, name: e.target.value })}
        />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue={name.surname}
          onChange={(e) => setName({ ...name, surname: e.target.value })}
        />
        <div>
          <button type="submit">Download Resume</button>
        </div>
      </form>
    </Paper>
  );
};

export default ResumeForm;
