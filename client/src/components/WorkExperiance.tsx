import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../services/stepSlice";
import { addWorkExp } from "../services/workexpSlice";
import TextField from "@mui/material/TextField";

const WorkExperiance = () => {
  const dispatch = useDispatch();
  const [workexp, setWorkexp] = useState([{ name: "", company: "" }]);

  const handleClick = (e: any) => {
    navigate("/");
    dispatch(addWorkExp(workexp));
    dispatch(increment());
  };

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue={workexp}
            onChange={(e) =>
              setWorkexp({ ...workexp, company: e.target.value })
            }
          />
        </div>
      </form>

      <button
        className="pl-8"
        onClick={() => {
          navigate(-1);
          dispatch(decrement());
        }}
      >
        Navigate
      </button>
    </div>
  );
};

export default WorkExperiance;
