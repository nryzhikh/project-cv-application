import { useState } from "react";

export default function Experience() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [tasks, setTasks] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${company} ${position} ${tasks} ${start} ${end}`)
    }

    return (
       <form onSubmit={handleSubmit}>
        <h2>3. Experience</h2>
              <label>
                Company:
                <input
                 type="text"
                 value={company}
                 onChange={e => setCompany(e.target.value)}
                />
              </label>
              <label>
                Position:
                <input
                 type="text"
                 value={position}
                 onChange={e => setPosition(e.target.value)}
                />
              </label>
              <label>
                Tasks:
                <input
                 type="text"
                 value={tasks}
                 onChange={e => setTasks(e.target.value)}
                />
              </label>
              <label>
                Start Date:
                <input
                 type="date"
                 value={start}
                 onChange={e => setStart(e.target.value)}
                />
              </label>
              <label>
                End Date:
                <input
                 type="date"
                 value={end}
                 onChange={e => setEnd(e.target.value)}
                />
              </label>
                <input type="submit" value="Submit" />
       </form>
    );
}