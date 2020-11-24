import React from "react";
import "../css/App.css";

export default class viewMovieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { none: "none" };
    }
    render() {
        const movieTitle = "The Lion King";
        const movieWarnings = [
            {
                category: "Animal Death",
                type: "Explicit",
                severity: "Mild",
                frequency: "Sporadic",
            },
            {
                category: "Cartoon Violence",
                type: "Explicit",
                severity: "Mild",
                frequency: "Common",
            },
        ];
        const warningsListItems = movieWarnings.map((warning) => {
            return (
                <li>
                    <div>
                        <strong>{warning.category}:</strong>
                    </div>
                    <div>
                        Type:
                        <span class="red">{warning.type}</span>
                    </div>
                    <div>
                        Severity:
                        <span class="yellow">{warning.severity}</span>
                    </div>
                    <div>
                        Frequency:
                        <span class="green">{warning.frequency}</span>
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
}
