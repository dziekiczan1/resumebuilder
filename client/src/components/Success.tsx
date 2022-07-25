import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import saveAs from "file-saver";
import { useSelector } from "react-redux";

const Success = () => {
  const dataInfo = useSelector((state: any) => state);
  const navigate = useNavigate();
  const nextStep = (e: any) => {
    e.preventDefault();

    const data = dataInfo;

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
    <div>
      <Button
        variant="contained"
        size="large"
        type="button"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <Button variant="contained" size="large" type="button" onClick={nextStep}>
        Finish
      </Button>
    </div>
  );
};

export default Success;
