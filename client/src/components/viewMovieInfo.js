import React from "react";
import "../css/App.css";
async function getWarnings(movieID) {
    try {
        const response = await fetch("/warnings/movieID=" + movieID, {
            method: "GET",
        });
        const result = await response.json();

        return result

    } catch (e) {
        console.log(e);
    }
}
export default function ViewMovieInfo(movieID) {
    //const movieWarnings = getWarnings(movieID)
    const movieTitle = "The Lion King";
    const movieWarnings = [
        {
            category: "Animal Death",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 1,
            severity: 2,
            frequency: 2,
        },
        {
            category: "Cartoon Violence",
            type: 2,
            severity: 2,
            frequency: 2,
        },
    ]
    let foundCategories = []
    let movieWarningsF = movieWarnings.reduce((warnings, warning) => {
        if (!foundCategories.includes(warning.category)) {
            foundCategories.push(warning.category)
            warnings[warning.category] = warning
            warnings[warning.category].count = 1
            return warnings
        } else {
            warnings[warning.category].type += warning.type
            warnings[warning.category].severity += warning.severity
            warnings[warning.category].frequency += warning.frequency
            warnings[warning.category].count ++
            return warnings
        }
    }, {})


    console.log(movieWarningsF)
    const warningsListItems = Object.keys(movieWarningsF).map((warning) => {
        return (
            <li>
                <div>
                    <strong>{movieWarningsF[warning].category}:</strong>
                </div>
                <div>
                    Type:
                    <span className="red">{movieWarningsF[warning].type}</span>
                </div>
                <div>
                    Severity:
                    <span className="yellow">{movieWarningsF.[warning].severity}</span>
                </div>
                <div>
                    Frequency:
                    <span className="green">{movieWarningsF.[warning].frequency}</span>
                </div>
                <div>
                    <button>View user comments</button>
                </div>
            </li>
        );
    });
    return (
        <div id="notebooks">
            <h2>{movieTitle}</h2>
            <h3>Warnings:</h3>
            <ul>{warningsListItems}</ul>
            <button>Add warning</button>
        </div>
    );
}

