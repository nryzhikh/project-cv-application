import { useState } from "react";

export default function GeneralInformation() {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name} ${age} ${email} ${phone}`)
    }

    const handleInputChange = (event) => {
        // Remove any characters that are not numbers, +, -, ., (, ), or space
        event.target.value = event.target.value.replace(/[^\d+-.()\s]/g, '');
    };

    return (
       <form onSubmit={handleSubmit}>
        <h2>1. General Information</h2>
              <label>
                Name:
                <input
                 type="text"
                 value={name}
                 onChange={e => setName(e.target.value)}
                />
              </label>
              <label>
                Age:
                <input
                 type="number"
                 required
                 value={age}
                 onChange={e => setAge(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                 type="email"
                 pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" title="Invalid email format" required
                 value={email}
                 onChange={e => setEmail(e.target.value)}
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
                 onChange={e => setPhone(e.target.value)}
                />
              </label>
                <input type="submit" value="Submit" />
                <button type="button">Edit</button>
            </form>
    );
}