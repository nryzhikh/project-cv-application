import ExperienceSection from './experience-section';
import PropTypes from 'prop-types';


function Experience ({experiences, updateField, goToForm, addSection, removeSection}) {

    const handleChange = (e) => {
      const { id, name, value } = e.target;
      updateField(id, name, value);
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      goToForm(4);
    }

    const handleAddExperience = (e) => {
        e.preventDefault();
        addSection();
    }

    return (
       <form onSubmit={handleSubmit}>
        <h2>1. General Information</h2>
        <button type="button" onClick={() => goToForm(1)}>Edit</button>
        <h2>2. Education</h2>
        <button type="button" onClick={() => goToForm(2)}>Edit</button>
        <h2>3. Experience</h2>
        <button type="button" onClick={handleAddExperience}>Add</button>
        {experiences.map((experienceData, index) => (
        <>
        <ExperienceSection  sectionData={experienceData} onChange={handleChange} key={index} id={index}/>
        <button type="button" onClick={() => removeSection(index)}>Remove</button>
        </>
        ))}
        <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

Experience.propTypes = {
    experiences: PropTypes.array.isRequired,
    updateField: PropTypes.func.isRequired,
    goToForm: PropTypes.func.isRequired,
    addSection: PropTypes.func.isRequired,
    removeSection: PropTypes.func.isRequired,
    renderA4Page: PropTypes.func.isRequired,
  };

export default Experience;







