import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../services/stepSlice";
import { addSchool } from "../services/educationSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Education = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [schoolList, setSchoolList] = useState<any>([
    {
      school: "",
      yearstart: "",
      yearend: "",
      fieldOfStudy: "",
      description: "",
    },
  ]);

  const handleClick = (e: any) => {
    navigate("/extra");
    dispatch(addSchool(schoolList));
    dispatch(increment());
  };

  const handleSchoolChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const list = [...schoolList];
    list[index][name] = value;
    setSchoolList(list);
  };

  const handleSchoolRemove = (index: number) => {
    const list = [...schoolList];
    list.splice(index, 1);
    setSchoolList(list);
  };

  const handleSchoolAdd = () => {
    setSchoolList([
      ...schoolList,
      {
        school: "",
        yearstart: "",
        yearend: "",
        fieldOfStudy: "",
        description: "",
      },
    ]);
  };

  return (
    <>
      <p className="mt-2 mb-12 text-lg leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Education
      </p>
      <form onSubmit={handleClick}>
        {schoolList.map((singleSchool: any, index: number) => (
          <>
            <div key={index} className="flex">
              <div className="w-3/4 flex flex-col justify-center items-center gap-8 my-8">
                <div className="w-full flex flex-row justify-center items-center">
                  <TextField
                    required
                    className="w-3/4"
                    name="school"
                    type="text"
                    id="school"
                    label="School Name"
                    InputLabelProps={{ shrink: true }}
                    value={singleSchool.school}
                    onChange={(e) => handleSchoolChange(e, index)}
                  />
                </div>
                <div className="w-full flex flex-row gap-12 justify-center items-center">
                  <TextField
                    required
                    name="fieldOfStudy"
                    type="text"
                    id="fieldOfStudy"
                    label="Field Of Study"
                    InputLabelProps={{ shrink: true }}
                    value={singleSchool.fieldOfStudy}
                    onChange={(e) => handleSchoolChange(e, index)}
                  />
                  <TextField
                    required
                    name="yearstart"
                    type="date"
                    id="yearstart"
                    InputLabelProps={{ shrink: true }}
                    label="Begin Date"
                    value={singleSchool.yearstart}
                    onChange={(e) => handleSchoolChange(e, index)}
                  />
                  <TextField
                    required
                    name="yearend"
                    type="date"
                    id="yearend"
                    InputLabelProps={{ shrink: true }}
                    label="Finish Date"
                    value={singleSchool.yearend}
                    onChange={(e) => handleSchoolChange(e, index)}
                  />
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                  <TextField
                    required
                    className="w-3/4"
                    name="description"
                    type="text"
                    id="description"
                    label="Description"
                    InputLabelProps={{ shrink: true }}
                    value={singleSchool.description}
                    onChange={(e) => handleSchoolChange(e, index)}
                  />
                </div>
              </div>
              <div className="w-1/4 flex flex-row gap-8 justify-center items-center">
                {schoolList.length - 1 === index && schoolList.length < 4 && (
                  <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    color="success"
                    onClick={handleSchoolAdd}
                    startIcon={<AddIcon />}
                  >
                    Add
                  </Button>
                )}

                {schoolList.length !== 1 && (
                  <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    color="error"
                    onClick={() => handleSchoolRemove(index)}
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

export default Education;
