import React from "react";
import { useNavigate } from "react-router-dom";

const WorkExperiance = () => {
  const navigate = useNavigate();
  return (
    <div>
      WorkExperiance{" "}
      <button className="pl-8" onClick={() => navigate(-1)}>
        Navigate
      </button>
    </div>
  );
};

export default WorkExperiance;
