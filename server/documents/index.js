module.exports = ({ resume, workexp, education, extra }) => {
  const pInfo = resume.profileSection;
  const wExp = workexp.workExperiance;
  const educationExp = education.education;
  const additionalInfo = extra.extraInfo;

  return `
      <!doctype html>
      <html>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <style>
        body{
          font-family: Arial;
          font-size: 0.7rem;
        }
        .section-container {
          padding: 0 2rem;
          margin-top: 0.5rem;
        }
  
        .profile-info-heading {
          font-size: 3rem;
          font-weight: 600;
          margin-top: 1rem;
        }

        .education-info-heading{
          margin-top: 0.8rem;
          font-weight: 600;
        }
  
        .info-container {
          display: -webkit-flex;
          flex-wrap: wrap;
        }
  
        .info-data {
          width: 40%;
        }

        .info-details{
          width: 60%;
          padding-right: 4rem;
        }

        .info-details-field{
          font-size: 0.6rem;
        }

        .mb{
          margin-bottom: 0.5rem;
        }

        .extrainfo-field{
          display: -webkit-flex;
        }

        .extrainfo{
          display: inline;
        }

        .footer{
          margin-top: 1.5rem;
          padding: 0 2rem;
          text-align: center;
          font-size: 0.5rem;
          font-style: italic;
        }

        p{
          padding-left: 0.2rem;
          margin-bottom: 0.4rem;
        }

      </style>
    </head>
  
    <body>
      <div>
        <div class="section-container">
          <h1 class="profile-info-heading">${pInfo.name} ${pInfo.surname}</h1>
          <hr style="width: 90%" />
          <div class="info-container">
            <div class="info-data">
              <p>Mobile:</p>
              <p>Email:</p>
              <p>Birthday:</p>
              <p>City:</p>
              <p>Github:</p>
            </div>
            <div class="info-details">
            <p>${pInfo.mobile}</p>
            <p>${pInfo.email}</p>
            <p>${pInfo.birthday.split("-").reverse().join("-")}</p>
              <p>${pInfo.city}</p>
              <p>${pInfo.github}</p>
            </div>
          </div>
        </div>
        <div class="section-container">
          <h2 class="education-info-heading">Education</h2>
          <hr style="width: 90%" />
            ${educationExp
              .map((school) => {
                const yBegin = school.yearstart.split("-").reverse().join("-");
                const yEnd = school.yearend.split("-").reverse().join("-");
                return `
            <div class="info-container">
              <div class="info-data">
                <p>${yBegin} - ${yEnd}</p>
              </div>
              <div class="info-details mb">
                <p><b>${school.school}</b></p>
                <p class="info-details-field"><b>Field of study:</b> ${school.fieldOfStudy}</p>
                <p class="info-details-field">${school.description}</p>
              </div>
            </div>
            `;
              })
              .join("")}
        </div>
        <div class="section-container">
          <h2 class="education-info-heading">Work Experiance</h2>
          <hr style="width: 90%" />
          ${wExp
            .map((work) => {
              const yBegin = work.yearstart.split("-").reverse().join("-");
              const yEnd = work.yearend.split("-").reverse().join("-");
              return `
          <div class="info-container">
            <div class="info-data">
              <p>${yBegin} - ${yEnd}</p>
            </div>
            <div class="info-details mb">
              <p><b>${work.company}</b></p>
              <p class="info-details-field"><b>Position:</b> ${work.position}</p>
              <p class="info-details-field">${work.description}</p>
            </div>
          </div>
          `;
            })
            .join("")}
       </div>
       <div class="section-container">
          <h2 class="education-info-heading">Additional information</h2>
          <hr style="width: 90%" />
          <div class="info-container">
            <div class="info-data">
              <p>Languages:</p>
              <p>TechStack:</p>
              <p>Hobbies:</p>
              <p>Other:</p>
            </div>
            <div class="info-details">
              <div class="extrainfo-field">
                ${additionalInfo.language
                  .map((lang) => {
                    return `<p>${lang}</p>`;
                  })
                  .join(", ")}
              </div>
              <div class="extrainfo-field">
                ${additionalInfo.techstack
                  .map((tech) => {
                    return `<p>${tech}</p>`;
                  })
                  .join(", ")}
              </div>
              <div class="extrainfo-field">
                ${additionalInfo.hobbies
                  .map((hobby) => {
                    return `<p>${hobby}</p>`;
                  })
                  .join(", ")}
              </div>
              <div class="extrainfo-field">
                ${additionalInfo.other
                  .map((oth) => {
                    return `<p>${oth}</p>`;
                  })
                  .join(", ")}
              </div>
            </div>
          </div>
          <hr style="width: 90%" />
        </div>
        <div class="footer"><p>I agree to the processing of personal data provided in this document for realizing the recruitment process
        pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
        agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the
        protection of natural persons with regard to the processing of personal data and on the free movement of such
        data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p></div>
      </div>
    </body>
  </html>
    `;
};
