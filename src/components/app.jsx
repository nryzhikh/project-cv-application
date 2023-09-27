import GeneralInformation from "./general-information";
import Education from "./education";
import Experience from "./experience";
import A4Preview from "./A4Preview";
import { useState } from "react";
import Print from "./print";

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
              return <Education
                updateField={updateEducation}
                goToForm={goToForm}
                education={education}
                addSection={addEducation}
                removeSection={removeEducation}
              />;
            case 3:
              return <Experience
                updateField={updateExperience}
                goToForm={goToForm}
                experiences={experiences}
                addSection={addExperience}
                removeSection={removeExperience}
            />;
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

