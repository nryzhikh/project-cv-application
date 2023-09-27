import PropTypes from 'prop-types';

function EducationSection({eduSectionData, id, onChange}) {
    
    return (
        <div key={id} id={id}>
            <h3>Education {id + 1}</h3>
            <label>
                School:
                <input
                id={id}
                 type="text"
                 name="school"
                 value={eduSectionData.school}
                 onChange={onChange}
                 required
                />
              </label>
              <label>
                Degree:
                <input
                id={id}
                 type="text"
                 name="degree"
                 value={eduSectionData.degree}
                 onChange={onChange}
                 required
                />
              </label>
              <label>
                Date of Graduation:
                <input
                id={id}
                 type="date"
                 name="graduation"
                 value={eduSectionData.graduation}
                 onChange={onChange}
                 required
                />
              </label>
                <label>
                GPA:
                <input
                id={id}
                 type="number"
                 name="gpa"
                 value={eduSectionData.gpa}
                 onChange={onChange}
                 required
                />
                </label>
        </div>
    );
}

EducationSection.propTypes = {
    eduSectionData: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default EducationSection;