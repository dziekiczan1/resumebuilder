import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import saveAs from "file-saver";
import { useDispatch, useSelector } from "react-redux";
import { setzero } from "../services/stepSlice";

const Success = () => {
  const dataInfo = useSelector((state: any) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = (e: any) => {
    e.preventDefault();

    const data = dataInfo;

    axios
      .post("https://createresumex.herokuapp.com/resume-createpdf", data)
      .then(() =>
        axios.get("https://createresumex.herokuapp.com/resume-fetchpdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "Resume.pdf");
      });
  };

  return (
    <>
      <p className="mt-2 mb-2 text-lg text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Success!
      </p>
      <p className="text-center mb-8">Your Resume is now ready to download.</p>

      <div className="flex justify-center items-center gap-12">
        <Button
          variant="contained"
          size="large"
          type="button"
          onClick={() => {
            navigate("/");
            dispatch(setzero());
          }}
        >
          Start Over
        </Button>
        <Button
          variant="contained"
          size="large"
          type="button"
          color="success"
          onClick={nextStep}
        >
          Download Resume
        </Button>
      </div>
    </>
  );
};

export default Success;
