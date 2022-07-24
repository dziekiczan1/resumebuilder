import React from "react";
import { useNavigate } from "react-router-dom";

const WorkExperiance = ({ activeStep }: any) => {
  const navigate = useNavigate();
  return (
    <div>
      WorkExperiance{" "}
      <button className="pl-8" onClick={() => navigate(-1)}>
        Navigate{activeStep}
      </button>
    </div>
  );
};

export default WorkExperiance;
