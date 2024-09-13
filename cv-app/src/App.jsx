import Resume from './components/Resume'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Card from './components/Card'
import { useState } from 'react'

function App() {

  //set default state for placeholder values
  const [personal, setPersonal] = useState([{
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    phoneNumber: '011-2222301',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aut, sit quo vel corrupti eveniet aperiam officia iure autem sint accusantium culpa. Neque sint nemo totam sequi, quo eligendi perferendis.'
  }]);

  const [education, setEducation] = useState([{
    instituteName: 'APU',
    degree: 'BSc (Hons) in Software Engineering',
    startDate: '09/2020',
    endDate: '06/2025',
  }]);

  const [experience, setExperience] = useState([{
    companyName: 'ABC Company',
    position: 'Salesman',
    startDate: '09/2024',
    endDate: '09/2025',
    description: 'Erm...',
  }]);

  return (
    <>
      <div className="cv-container">
        <div className="editing-section">
        <Card title="Personal"><Personal state={personal} setState={setPersonal}/></Card>
        <Card title="Education"><Education state={education} setState={setEducation}/></Card>
        <Card title="Experience"><Experience state={experience} setState={setExperience}/></Card>
        </div>
        <div className="preview-section">
        <Resume personal={personal} education={education} experience={experience}/>
        </div>
      </div>
    </>
  )
}

export default App
