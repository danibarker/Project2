import React, { useState } from "react";
import "../css/App.css";
function sendData(warning) {
    console.log(warning);
}
let warnings = [
    { category: 5, frequency: 3, type: 2, severity: 4 },
    { category: 5, frequency: 3, type: 2, severity: 4 },
    { category: 5, frequency: 3, type: 2, severity: 4 },
];
export default function AddWarning() {
    const [warning, setWarning] = useState([]);
    const [category, setCategory] = useState("Violence");
    const [frequency, setFrequency] = useState("Sporadic");
    const [type, setType] = useState("Explicit");
    const [severity, setSeverity] = useState("Moderate");
    return (
        <div>
            <select
                onChange={(event) => {
                    return setCategory(event.target.value);
                }}
            >
                <option>Violence</option>
                <option>Nudity</option>
                <option>Harm to animals</option>
                <option>Insects/Bugs/Snakes</option>
                <option>Drugs</option>
                <option>Alcohol</option>
                <option>Blood/Gore</option>
                <option>Death</option>
                <option>Sexuality</option>
                <option>Sexual Violence</option>
                <option>Abuse</option>
                <option>Racism</option>
                <option>Homophobia</option>
                <option>Transphobia</option>
                <option>Misogyny</option>
                <option>Ableism</option>
                <option>Supernatural</option>
            </select>
            <select
                onChange={(event) => {
                    return setFrequency(event.target.value);
                }}
            >
                <option>Sporadic</option>
                <option>Single</option>
                <option>Common</option>
                <option>Heavy</option>
            </select>

            <select
                onChange={(event) => {
                    return setType(event.target.value);
                }}
            >
                <option>Explicit</option>
                <option>Implied</option>
                <option>Suggested</option>
                <option>Underlying</option>
            </select>

            <select
                onChange={(event) => {
                    return setSeverity(event.target.value);
                }}
            >
                <option>Moderate</option>
                <option>Mild</option>
                <option>Severe</option>
            </select>
            <label htmlFor="commentBox">Details:</label>
            <textarea id="commentBox" rows="10" cols="80" />

            <button
                onClick={() =>
                    setWarning(
                        warnings.concat([
                            {
                                category: category,
                                frequency: frequency,
                                type: type,
                                severity: severity,
                            },
                        ])
                    )
                }
            >
                Click
            </button>

            <br />
            <br />
            <div>
                <table border="1">
                    <tr>
                        <th>Category</th>
                        <th>Frequency</th>
                        <th>Type</th>
                        <th>Severity</th>
                    </tr>
                    {warnings.length > 0
                        ? warnings.map((item) => (
                              <tr>
                                  <td key={warnings.indexOf(item)}>
                                      {item.category}
                                  </td>
                                  <td key={warnings.indexOf(item)}>
                                      {item.frequency}
                                  </td>
                                  <td key={warnings.indexOf(item)}>
                                      {item.type}
                                  </td>
                                  <td key={warnings.indexOf(item)}>
                                      {item.severity}
                                  </td>
                              </tr>
                          ))
                        : ""}
                </table>
            </div>
            <button onClick={() => sendData(warning)}>Send Data</button>
        </div>
    );
}
