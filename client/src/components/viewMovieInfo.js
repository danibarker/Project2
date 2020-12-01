import React from "react";
import "../css/App.css";
import { getAllResource } from "../requests/gets";

export default function ViewMovieInfo({ movieID }) {
    //const movieWarnings = getWarnings(movieID)
    
    const movieTitle = movieID;
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
            frequency: 9,
        },
    ];
    let foundCategories = [];
    let movieWarningsF = movieWarnings.reduce((warnings, warning) => {
        if (!foundCategories.includes(warning.category)) {
            foundCategories.push(warning.category);
            warnings[warning.category] = warning;
            warnings[warning.category].count = 1;
            return warnings;
        } else {
            warnings[warning.category].type += warning.type;
            warnings[warning.category].severity += warning.severity;
            warnings[warning.category].frequency += warning.frequency;
            warnings[warning.category].count++;
            return warnings;
        }
    }, {});

    console.log(movieWarningsF);
    const warningsListItems = Object.keys(movieWarningsF).map((warning) => {
        let warn = movieWarningsF[warning];
        return (
            <li className="warningListItem">
                <div>
                    <strong>{warn.category}:</strong>
                </div>
                <div>
                    Type:
                    <span className="red">
                        {Math.round(warn.type / warn.count)}
                    </span>
                </div>
                <div>
                    Severity:
                    <span className="yellow">
                        {Math.round(warn.severity / warn.count)}
                    </span>
                </div>
                <div>
                    Frequency:
                    <span className="green">
                        {Math.round(warn.frequency / warn.count)}
                    </span>
                </div>
                <div>
                    <button>View user comments</button>
                </div>
            </li>
        );
    });
    
    return (
        <>
            <div className="pageContainer threeQuartersPageContainer">
                <h2>{movieTitle}</h2>
                <h3>Warnings:</h3>
                <ul className="warningList">{warningsListItems}</ul>
            </div>
            <div className="pageContainer warningPageContainer-Bottom">
                <button>Add warning</button>
            </div>
        </>
    );
}
