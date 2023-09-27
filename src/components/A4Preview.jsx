import '../styles/A4Preview.css';
import PropTypes from 'prop-types';


function A4Preview({genInfo, experience, education}) {

    return (
        <div className="a4-container" id="contentToPrint">
            <p>Name: {genInfo.name}</p>
            <p>Age: {genInfo.age}</p>
            <p>Email: {genInfo.email}</p>
            <p>Phone: {genInfo.phone}</p>
            {education.map((educationData) => (
            <>
            <p>School: {educationData.school}</p>
            <p>Degree: {educationData.degree}</p>
            <p>Date of Graduation: {educationData.graduation}</p>
            <p>GPA: {educationData.gpa}</p>
            </>
            ))}
            {experience.map((experienceData) => (
            <>
            <p>Company: {experienceData.company}</p>
            <p>Position: {experienceData.position}</p>
            <p>Tasks: {experienceData.tasks}</p>
            <p>Start Date: {experienceData.start}</p>
            <p>End Date: {experienceData.end}</p>
            </>
            ))}

        </div>
    );
}

A4Preview.propTypes = {
    genInfo: PropTypes.object.isRequired,
    experience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
};

export default A4Preview;
