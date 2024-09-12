import React from 'react'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="general-section">
        <h1>John Doe</h1>
        <div className="email-phone">
          <p>johndoe@gmail.com</p>
          <p> | </p>
          <p>012-3331827</p>
        </div>
      </div>
      <div className="separator"><hr></hr></div>
      <div className="summary-section">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dicta neque reiciendis sed beatae? Rem corporis culpa reiciendis in, odio earum accusamus assumenda quaerat sapiente sunt porro fugit eius provident? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit est delectus qui illo explicabo officia, tenetur reprehenderit! Iure atque fugit dolores quos praesentium, possimus nesciunt excepturi, deleniti recusandae modi provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati aliquam et explicabo! Vero perspiciatis impedit, et voluptate ipsa tempore qui corrupti, nisi harum officiis beatae laboriosam dolor totam debitis!</p>
      </div>
      <div className="separator"></div>
      <div className="education-section">
        <h2>Education</h2>
        <div className="separator"></div>
        <div className="card">
          <div className="row">
            <p>ABC University</p>
            <p>2020-Present</p>
          </div>
          <div className="card-body">
            <ul>
              <li>Cumulative GPA: 3.93</li>
              <li>Expected Graduate: 2024</li>
              <li>Achievements: Vice Chancellor's List</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="work-experience-section">
        <h2>Work Experience</h2>
        <div className="separator"></div>
        <div className="card">
          <div className="row">
            <p>XY Sdn Bhd</p>
            <p>2022-2023</p>
          </div>
          <div className="card-body">
            <ul>
              <li>Responsibility 1</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="separator"></div>
        <div className="card">
          <div className="row">
            <p>ABC University</p>
            <p>2020-2024</p>
          </div>
          <div className="card-body">
            <ul>
              <li>Cumulative GPA: 3.93</li>
              <li>Expected Graduate: 2024</li>
              <li>Achievements: Vice Chancellor's List</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume