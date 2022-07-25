import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addProfileSection } from "../services/resumeSlice";
import { increment } from "../services/stepSlice";
import Button from "@mui/material/Button";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState({
    name: "",
    surname: "",
    mobile: "",
    city: "",
    birthday: "",
    github: "",
  });
  const personalInfo = useSelector((state: any) => state.resume.profileSection);
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    navigate("/workexp");
    dispatch(addProfileSection(name));
    dispatch(increment());
  };
  console.log(personalInfo);
  return (
    <>
      <p className="mt-2 mb-12 text-lg leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Personal Informations
      </p>

      <form onSubmit={handleClick}>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue={personalInfo.name}
            onChange={(e) => setName({ ...name, name: e.target.value })}
          />

          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue={personalInfo.surname}
            onChange={(e) => setName({ ...name, surname: e.target.value })}
          />

          <TextField
            required
            id="outlined-required"
            label="Mobile"
            defaultValue={personalInfo.mobile}
            onChange={(e) => setName({ ...name, mobile: e.target.value })}
          />

          <TextField
            id="outlined-required"
            label="City"
            defaultValue={personalInfo.city}
            onChange={(e) => setName({ ...name, city: e.target.value })}
          />

          <TextField
            required
            id="outlined-required"
            label="Birthday"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setName({ ...name, birthday: e.target.value })}
          />

          <TextField
            id="outlined-required"
            label="Github"
            defaultValue={personalInfo.github}
            onChange={(e) => setName({ ...name, github: e.target.value })}
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <Button variant="contained" size="large" type="submit">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
