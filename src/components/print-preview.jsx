import { useState } from 'react';
import '../styles/print-preview.css'

function PrintPreviewForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: ''
        // ... any other fields
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div>
            <form>
                <label>
                    Name: 
                    <input name="name" value={formData.name} onChange={handleChange} />
                </label>
                {/* ... other inputs */}
            </form>

            <div className="print-preview">
                <p>Name: {formData.name}</p>
                {/* ... other fields */}
            </div>

            {/* Button to initiate actual print dialog if needed */}
            <button onClick={() => window.print()}>Print</button>
        </div>
    );
}

export default PrintPreviewForm;