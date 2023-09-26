import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import GeneralInformation from './components/general-information.jsx'
import A4Preview from './components/A4Preview.jsx'
import Education from './components/education'
import Experience from './components/experience'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInformation />
    <Education />
    <Experience />
    <A4Preview>
      <h3>Title of Document</h3>
      <p>Content of the document goes here...</p>
      {/* Other content */}
    </A4Preview>
  </React.StrictMode>,
)
