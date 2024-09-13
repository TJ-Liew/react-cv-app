import React from 'react'

//add index
const Resume = ({ personal, education, experience}) => {
  return (
    <div className="resume-container">
      <div className="general-section">
        <h1>{personal[0].name}</h1>
        <div className="email-phone">
          <p>{personal[0].email}</p>
          <p> | </p>
          <p>{personal[0].phoneNumber}</p>
        </div>
      </div>
      <div className="separator"><hr></hr></div>
      <div className="general-section">
        <p>{personal[0].summary}</p>
      </div>
      <div className="separator"></div>
      <div className="education-section">
        <h2>Education</h2>
        <div className="separator"></div>
        <div className="card">
          {education.map((item, index) => {
            return <div key={index} className='card-content'>
              <h3>{education[index].instituteName}</h3>
              <p>{education[index].startDate + " - " + education[index].endDate}</p>
              <p>{education[index].degree}</p>
            </div>
          })}
        </div>
      </div>
      <div className="work-experience-section">
        <h2>Work Experience</h2>
        <div className="separator"></div>
        <div className="card">
          {experience.map((item, index) => {
            return <div key={index} className="card-content">
              <h3>{experience[index].companyName}</h3>
              <p>{experience[index].startDate + " - " + experience[index].endDate}</p>
              <p>{experience[index].position}</p>
              <p>{experience[index].description}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Resume