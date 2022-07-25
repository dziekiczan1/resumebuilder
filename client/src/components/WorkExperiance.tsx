import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../services/stepSlice";
import { addWorkExp } from "../services/workexpSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const WorkExperiance = () => {
  const personalInfo = useSelector((state: any) => state.resume.profileSection);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [workList, setWorkList] = useState<any>([
    { company: "", yearstart: "" },
  ]);

  const handleClick = (e: any) => {
    navigate("/education");
    dispatch(addWorkExp(workList));
    dispatch(increment());
  };

  const handleWorkChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const list = [...workList];
    list[index][name] = value;
    setWorkList(list);
  };

  const handleWorkRemove = (index: number) => {
    const list = [...workList];
    list.splice(index, 1);
    setWorkList(list);
  };

  const handleWorkAdd = () => {
    setWorkList([...workList, { company: "", yearstart: "" }]);
  };
  console.log(personalInfo);
  return (
    <div>
      <form onSubmit={handleClick}>
        {workList.map((singleWork: any, index: number) => (
          <div key={index}>
            <div className="flex flex-col justify-center items-center gap-8 my-8">
              <div className="w-full flex flex-row justify-center items-center">
                <TextField
                  required
                  className="w-1/2"
                  name="company"
                  type="text"
                  id="company"
                  label="Company Name"
                  InputLabelProps={{ shrink: true }}
                  value={singleWork.company}
                  onChange={(e) => handleWorkChange(e, index)}
                />
              </div>
              <div className="w-full flex flex-row gap-4 justify-center items-center">
                <TextField
                  required
                  name="position"
                  type="text"
                  id="position"
                  label="Position"
                  InputLabelProps={{ shrink: true }}
                  value={singleWork.position}
                  onChange={(e) => handleWorkChange(e, index)}
                />
                <TextField
                  required
                  name="yearstart"
                  type="date"
                  id="yearstart"
                  InputLabelProps={{ shrink: true }}
                  label="Begin Date"
                  value={singleWork.yearstart}
                  onChange={(e) => handleWorkChange(e, index)}
                />
                <TextField
                  required
                  name="yearend"
                  type="date"
                  id="yearend"
                  InputLabelProps={{ shrink: true }}
                  label="Finish Date"
                  value={singleWork.yearend}
                  onChange={(e) => handleWorkChange(e, index)}
                />
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <TextField
                  required
                  className="w-1/2"
                  name="description"
                  type="text"
                  id="description"
                  label="Job description"
                  InputLabelProps={{ shrink: true }}
                  value={singleWork.description}
                  onChange={(e) => handleWorkChange(e, index)}
                />
              </div>
              <div className="w-full flex flex-row gap-8 justify-center items-center">
                {workList.length - 1 === index && workList.length < 4 && (
                  <Button
                    variant="contained"
                    size="large"
                    type="button"
                    color="success"
                    onClick={handleWorkAdd}
                  >
                    Add
                  </Button>
                )}

                {workList.length !== 1 && (
                  <Button
                    variant="contained"
                    size="large"
                    type="button"
                    color="error"
                    onClick={() => handleWorkRemove(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-8 gap-12 flex justify-center items-center">
          <Button
            variant="contained"
            size="large"
            type="button"
            onClick={() => {
              navigate(-1);
              dispatch(decrement());
            }}
          >
            Back
          </Button>
          <Button variant="contained" size="large" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperiance;
