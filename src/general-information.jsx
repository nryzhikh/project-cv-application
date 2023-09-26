import { useState } from "react";

export default function GeneralInformation() {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
       <form>
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
                 value={age}
                 onChange={e => setAge(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                 type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label>
                Phone:
                <input
                 type="tel"
                 value={phone}
                 onChange={e => setPhone(e.target.value)}
                />
              </label>
                <input type="submit" value="Submit" />
            </form>
    );
}