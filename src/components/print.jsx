import PropTypes from 'prop-types';

function Print ({ goToForm }) {

    function handlePrint(e) {
        e.preventDefault();
        window.print();
    }


    return (
       <form>
        <h2>1. General Information</h2>
        <button type="button" onClick={() => goToForm(1)}>Edit</button>
        <h2>2. Education</h2>
        <button type="button" onClick={() => goToForm(2)}>Edit</button>
        <h2>3. Experience</h2>
        <button type="button" onClick={() => goToForm(3)}>Edit</button>
        <h2>4. Print</h2>
        <button onClick={handlePrint}>Print</button>
        </form>
    );
}

Print.propTypes = {
    goToForm: PropTypes.func.isRequired,
  };

export default Print;