import { useState } from "react";

export default function Education() {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [field, setField] = useState("");
    const [graduation, setGraduation] = useState("");
    const [gpa, setGpa] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${school} ${degree} ${field} ${graduation} ${gpa}`)
    }

    return (
       <form onSubmit={handleSubmit}>
        <h2>2. Education</h2>
              <label>
                School:
                <input
                 type="text"
                 value={school}
                 onChange={e => setSchool(e.target.value)}
                />
              </label>
              <label>
                Degree:
                <input
                 type="text"
                 value={degree}
                 onChange={e => setDegree(e.target.value)}
                />
              </label>
              <label>
                Field of Study:
                <input
                 type="text"
                 value={field}
                 onChange={e => setField(e.target.value)}
                />
              </label>
              <label>
                Graduation Date:
                <input
                 type="date"
                 value={graduation}
                 onChange={e => setGraduation(e.target.value)}
                />
              </label>
              <label>
                GPA:
                <input
                 type="number"
                 step="0.01"
                 min="0"
                 max="4"
                 value={gpa}
                 onChange={e => setGpa(e.target.value)}
                />
              </label>
                <input type="submit" value="Submit" />
                <button type="button">Edit</button>
       </form>
    );
}