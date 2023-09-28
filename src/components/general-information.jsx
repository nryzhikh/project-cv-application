
import PropTypes from 'prop-types';


function GeneralInformation({genInfo, updateField, goToForm}) {
   

    const handleInputChange = (event) => {
        // Remove any characters that are not numbers, +, -, ., (, ), or space
        event.target.value = event.target.value.replace(/[^\d+-.()\s]/g, '');
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      updateField(name, value);
  };


    return (
       <form>
        <h2>1. General Information</h2>
              <label>
                Name:
                <input
                className='active'
                 type="text"
                 name="name"
                 value={genInfo.name}
                 onChange={handleChange}
                />
              </label>
              <label>
                Age:
                <input
                 type="number"
                 required
                 name="age"
                 value={genInfo.age}
                 onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                 type="email"
                 name="email"
                 pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" title="Invalid email format" required
                 value={genInfo.email}
                 onChange={handleChange}
                />
              </label>
              <label>
                Phone:
                <input
                 type="tel" 
                 name="phone" 
                 pattern="^\+?\d{0,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$" 
                 title="Invalid phone number format" 
                 required
                 onInput={handleInputChange}
                 value={genInfo.phone}
                 onChange={handleChange}
                />
              </label>
              <button onClick={() => goToForm(2)}>Next</button>
            </form>
    );
}

GeneralInformation.propTypes = {
    genInfo: PropTypes.object.isRequired,
    updateField: PropTypes.func.isRequired,
    goToForm: PropTypes.func.isRequired,
};

export default GeneralInformation;