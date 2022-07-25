import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addExtraInfo } from "../services/extraInfoSlice";
import { increment } from "../services/stepSlice";
import Button from "@mui/material/Button";
import axios from "axios";
import saveAs from "file-saver";

const ExtraInfo = () => {
  const dataInfo = useSelector((state: any) => state);
  const [extraInfo, setExtraInfo] = useState<any>({
    language: [],
    techstack: {},
    other: [],
    hobbies: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nextStep = (e: any) => {
    dispatch(addExtraInfo(extraInfo));

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

  console.log(extraInfo);

  return (
    <>
      <p className="mt-2 mb-12 text-lg leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Extra Informations
      </p>

      <form onSubmit={nextStep}>
        <div className="flex flex-col flex-wrap justify-center items-center gap-8">
          <TextField
            required
            className="w-1/2"
            name="languages"
            type="text"
            id="languages"
            label="Languages"
            onChange={(e) =>
              setExtraInfo({
                ...extraInfo,
                language: e.target.value.split(", "),
              })
            }
          />

          <TextField
            required
            className="w-1/2"
            name="techstack"
            type="text"
            id="techstack"
            label="Tech Stack"
            onChange={(e) =>
              setExtraInfo({
                ...extraInfo,
                techstack: e.target.value.split(", "),
              })
            }
          />

          <TextField
            required
            className="w-1/2"
            name="hobbies"
            type="text"
            id="hobbies"
            label="Hobbies"
            onChange={(e) =>
              setExtraInfo({
                ...extraInfo,
                hobbies: e.target.value.split(", "),
              })
            }
          />

          <TextField
            required
            className="w-1/2"
            name="other"
            type="text"
            id="other"
            label="Other"
            onChange={(e) =>
              setExtraInfo({
                ...extraInfo,
                other: e.target.value.split(", "),
              })
            }
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <Button variant="contained" size="large" type="submit">
            Finish
          </Button>
        </div>
      </form>
    </>
  );
};

export default ExtraInfo;
