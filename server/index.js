const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const resumeTemplate = require("./documents");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/resume-createpdf", (req, res) => {
  pdf.create(resumeTemplate(req.body), {}).toFile("Resume.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
      console.log(err);
    }
    res.send(Promise.resolve());
  });
});

app.get("/resume-fetchpdf", (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
