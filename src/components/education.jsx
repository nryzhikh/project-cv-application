import EducationSection from './education-section';
import PropTypes from 'prop-types';

function Education ({education, updateField, goToForm, addSection, removeSection}) {

   
    const handleChange = (e) => {
        const { id, name, value } = e.target;
        updateField(id, name, value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      goToForm(3);
    }

    const handleAddEducation = (e) => {
        e.preventDefault();
        addSection();
        console.log(education);
    }

    return (
       <form onSubmit={handleSubmit}>
        <h2>1. General Information</h2>
        <button type="button" onClick={() => goToForm(1)}>Edit</button>
        <h2>2. Education</h2>
        <button type="button" onClick={handleAddEducation}>Add</button>
        {education.map((educationData, index) => (
        <>
        <EducationSection  eduSectionData={educationData} onChange={handleChange} key={index} id={index}/>
        <button type="button" onClick={() => removeSection(index)}>Remove</button>
        </>
        ))}
        <button type="submit" value="Submit">Next</button>
        </form>
    );
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    updateField: PropTypes.func.isRequired,
    goToForm: PropTypes.func.isRequired,
    addSection: PropTypes.func.isRequired,
    removeSection: PropTypes.func.isRequired,
  };

export default Education;