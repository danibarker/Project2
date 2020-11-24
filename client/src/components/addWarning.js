import React, { useState } from "react";
import "../css/App.css";
function sendData(warning) {
    console.log(warning)
}
export default function AddWarning() {
    const [warning, setWarning] = useState([]);
    const [category, setCategory] = useState("Violence");
    const [type, setType] = useState("Explicit");
    return (
        <div>
            <select
                onChange={(event) => {
                    return setCategory(event.target.value);
                }}
            >
                <option>Violence</option>
                <option>Nudity</option>
            </select>
            <select
                onChange={(event) => {
                    return setType(event.target.value);
                }}
            >
                <option>Explicit</option>
                <option>Implicit</option>
            </select>
            <button
                onClick={() =>
                    setWarning(
                        warning.concat([{ category: category, type: type }])
                    )
                }
            >
                Click
            </button>
            <br />
            <br />
            <div>
                {warning.length > 0
                    ? warning.map((item) => (
                          <div key={warning.indexOf(item)}>{Object.values(item) + ""}</div>
                      ))
                    : ""}
            </div>
            <button onClick={()=>sendData(warning)}>Send Data</button>
        </div>
    );
}
