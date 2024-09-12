import React from 'react'

const Resume = ({personal, education, experience}) => {
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
      <div className="summary-section">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dicta neque reiciendis sed beatae? Rem corporis culpa reiciendis in, odio earum accusamus assumenda quaerat sapiente sunt porro fugit eius provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit est delectus qui illo explicabo officia, tenetur reprehenderit! Iure atque fugit dolores quos praesentium, possimus nesciunt excepturi, deleniti recusandae modi provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati aliquam et explicabo!</p>
      </div>
      <div className="separator"></div>
      <div className="education-section">
        <h2>Education</h2>
        <div className="separator"></div>
        <div className="card">
          <div className="card-content">
            <p>{education[0].instituteName}</p>
            <p>{education[0].startDate + " - " + education[0].endDate}</p>
            <p>{education[0].degree}</p>
          </div>
        </div>
      </div>
      <div className="work-experience-section">
        <h2>Work Experience</h2>
        <div className="separator"></div>
        <div className="card">
          <div className="card-content">
            <p>{experience[0].companyName}</p>
            <p>{experience[0].startDate + " - " + education[0].endDate}</p>
            <p>{experience[0].position}</p>
            <p>{experience[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume