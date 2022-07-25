import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../services/stepSlice";
import { addWorkExp } from "../services/workexpSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const WorkExperiance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [workList, setWorkList] = useState<any>([
    { company: "", yearstart: "", yearend: "", position: "", description: "" },
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
    setWorkList([
      ...workList,
      {
        company: "",
        yearstart: "",
        yearend: "",
        position: "",
        description: "",
      },
    ]);
  };

  return (
    <>
      <p className="mt-2 mb-12 text-lg leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Work Experiance
      </p>
      <form onSubmit={handleClick}>
        {workList.map((singleWork: any, index: number) => (
          <>
            <div key={index} className="flex">
              <div className="w-3/4 flex flex-col justify-center items-center gap-8 my-8">
                <div className="w-full flex flex-row justify-center items-center">
                  <TextField
                    required
                    className="w-3/4"
                    name="company"
                    type="text"
                    id="company"
                    label="Company Name"
                    InputLabelProps={{ shrink: true }}
                    value={singleWork.company}
                    onChange={(e) => handleWorkChange(e, index)}
                  />
                </div>
                <div className="w-full flex flex-row gap-12 justify-center items-center">
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
                    className="w-3/4"
                    name="description"
                    type="text"
                    id="description"
                    label="Job description"
                    InputLabelProps={{ shrink: true }}
                    value={singleWork.description}
                    onChange={(e) => handleWorkChange(e, index)}
                  />
                </div>
              </div>
              <div className="w-1/4 flex flex-row gap-8 justify-center items-center">
                {workList.length - 1 === index && workList.length < 4 && (
                  <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    color="success"
                    onClick={handleWorkAdd}
                    startIcon={<AddIcon />}
                  >
                    Add
                  </Button>
                )}

                {workList.length !== 1 && (
                  <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    color="error"
                    onClick={() => handleWorkRemove(index)}
                    startIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
            <hr className="mx-auto my-8 w-7/8" />
          </>
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
    </>
  );
};

export default WorkExperiance;
