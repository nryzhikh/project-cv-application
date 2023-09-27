import PropTypes from 'prop-types';

function ExperienceSection({sectionData, id, onChange}) {
    
    return (
        <div key={id} id={id}>
            <h3>Experience {id + 1}</h3>
            <label>
            Company:
            <input
            id={id}
             type="text"
             name="company"
             value={sectionData.company}
             onChange={onChange}
             required
            />
            </label>
            <label>
            Position:
            <input
            id={id}
             type="text"
             name="position"
             value={sectionData.position}
             onChange={onChange}
             required
            />
            </label>
            <label>
            Tasks:
            <input
            id={id}
             type="textarea"
             name="tasks"
             value={sectionData.tasks}
             onChange={onChange}
             required
            />
            </label>
            <label>
            Start Date:
            <input
            id={id}
             type="date"
             name="start"
             value={sectionData.start}
             onChange={onChange}
             required
            />
            </label>
            <label>
            End Date:
            <input
            id={id}
             type="date"
             name="end"
             value={sectionData.end}
             onChange={onChange}
             required
            />
            </label>
        </div>
    );
}

ExperienceSection.propTypes = {
    sectionData: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ExperienceSection;