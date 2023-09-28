import PropTypes from 'prop-types';

function ExperienceSection({ExpSectionData, id, onChange}) {
    
    return (
        <div key={id} id={id}>
            <h3>Experience {id + 1}</h3>
            <label>
            Company:
            <input
            id={id}
             type="text"
             name="company"
             value={ExpSectionData.company}
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
             value={ExpSectionData.position}
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
             value={ExpSectionData.tasks}
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
             value={ExpSectionData.start}
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
             value={ExpSectionData.end}
             onChange={onChange}
             required
            />
            </label>
        </div>
    );
}

ExperienceSection.propTypes = {
    ExpSectionData: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ExperienceSection;