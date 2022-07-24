import React, { useState } from "react";
import axios from "axios";
import saveAs from "file-saver";

const ResumeForm = () => {
  const [name, setName] = useState({
    name: "Name",
    surname: "Surname",
  });

  const nextStep = (e: any) => {
    e.preventDefault();

    const data = { name: name };

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
      <div>
        <h3>Info</h3>
        <hr />
      </div>
      <form onSubmit={nextStep}>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name.name}
              onChange={(e) => setName({ ...name, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={name.surname}
              onChange={(e) => setName({ ...name, surname: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit">Download Resume</button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
