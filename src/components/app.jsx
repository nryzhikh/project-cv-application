import GeneralInformation from "./general-information";
import ExperienceSection from "./experience-section";
import A4Preview from "./A4Preview";
import { useState } from "react";
import Print from "./print";
import EducationSection from "./education-section";

export default function App() {
    
    const [genInfo, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    const updateField = (name, value) => {
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const [education, setEducation] = useState([{
        school: "",
        degree: "",
        graduation: "",
        gpa: ""
    }]);

    const addEducation = () => {
        setEducation([...education, {
            school: "",
            degree: "",
            graduation: "",
            gpa: ""
        }]);
    }

    const removeEducation = (id) => {
        if(id === 0) return;
        setEducation(education.filter((education, index) => index !== id));
    }

    const updateEducation = (id, name, value) => {
        setEducation(prevData => {
            const newEducation = [...prevData];
            newEducation[id][name] = value;
            return newEducation;
        });
        console.log(education);
    }

    const [experiences, setExperience] = useState([{
        company: "",
        position: "",
        tasks: "",
        start: "",
        end: ""
    }]);

    const addExperience = () => {
        setExperience([...experiences, {
            company: "",
            position: "",
            tasks: "",
            start: "",
            end: ""
        }]);
    }

    const removeExperience = (id) => {
        if(id === 0) return;
        setExperience(experiences.filter((experience, index) => index !== id));
    }

    const updateExperience = (id, name, value) => {
        setExperience(prevData => {
            const newExperiences = [...prevData];
            newExperiences[id][name] = value;
            return newExperiences;
        });
    }

    const [currentForm, setCurrentForm] = useState(1);

    const goToForm = (formNumber) => {
        setCurrentForm(formNumber);
        console.log(currentForm)
    };

    const handleChangeEducation = (e) => {
        const { id, name, value } = e.target;
        updateEducation(id, name, value);
    };

    const handleChangeExperience = (e) => {
        const { id, name, value } = e.target;
        updateExperience(id, name, value);
    };


    
    return (
        <>
        {
        (() => {
          switch (currentForm) {
            case 1:
              return <GeneralInformation
                genInfo={genInfo}
                updateField={updateField}
                goToForm={goToForm}
             />;
            case 2:
            return <form>
                <h2>1. General Information</h2>
                <button type="button" onClick={() => goToForm(1)}>Edit</button>
                <h2>2. Education</h2>
                <button type="button" onClick={addEducation}>Add</button>
                {education.map((educationData, index) => (
                <>
                <EducationSection  eduSectionData={educationData} onChange={handleChangeEducation} key={index} id={index}/>
                <button type="button" onClick={() => removeEducation(index)}>Remove</button>
                </>
                ))}
                <button type="button" onClick={() => goToForm(3)}>Next</button>
              </form>
            case 3:
              return  <form>
                <h2>1. General Information</h2>
                <button type="button" onClick={() => goToForm(1)}>Edit</button>
                <h2>2. Education</h2>
                <button type="button" onClick={() => goToForm(2)}>Edit</button>
                <h2>3. Experience</h2>
                <button type="button" onClick={addExperience}>Add</button>
                {experiences.map((experienceData, index) => (
                    console.log(experienceData),
                <>
                <ExperienceSection  ExpSectionData={experienceData} onChange={handleChangeExperience} key={index} id={index}/>
                <button type="button" onClick={() => removeExperience(index)}>Remove</button>
                </>
                ))}
                <button onClick={() => goToForm(4)}>Submit</button>
              </form>;
            case 4:
                return <Print
                goToForm={goToForm}
                />;
            default:
              return <div>Invalid form step</div>;
          }
        })()
      }
        <A4Preview genInfo={genInfo} education={education} experience={experiences}/>
        </>
    );
}

