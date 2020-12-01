import React, { useState, useEffect } from "react";
import "../css/App.css";
import { getAllResource } from "../requests/gets";
import { CreateNewWarning } from "../requests/posts";

// Example of an adding warning using different categories

export default function AddWarning({
    setCurrentPage,
    userID,
    movieID,
    movieTitle,
}) {
    const findValueFromID = (type, id) => {
        console.log('type',type,'id',id)
        for (let item of pageData[type]) {
            if (item._id === id) {
                return item.title;
            }
        }
    };

    const getPageData = async () => {
        const categories = await getAllResource("categories");
        const frequencies = await getAllResource("frequencies");
        const types = await getAllResource("types");
        const severities = await getAllResource("severities");
        setPageData({
            categories: categories,
            frequencies: frequencies,
            types: types,
            severities: severities,
        });
    };
    const [unchosenError, setUnchosenError] = useState(false);
    const [pageData, setPageData] = useState();
    const [warnings, setWarnings] = useState([]);
    const [category, setCategory] = useState("");
    const [frequency, setFrequency] = useState("");
    const [type, setType] = useState("");
    const [severity, setSeverity] = useState("");
    const [comment, setComment] = useState("");
    useEffect(() => {
        getPageData();
    }, []);
    if (pageData) {
        return (
            <div className="pageContainer fullPageContainer">
                <div>Add a warning to {movieTitle}</div>
                <br></br>
                <div className="ptther">
                    <select
                        className="add-warning-dropdown"
                        onChange={(event) => {
                            setCategory(event.target.value);
                        }}
                    >
                        <option>Choose a category</option>
                        {pageData.categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                    <select
                        className="add-warning-dropdown"
                        onChange={(event) => {
                             setFrequency(event.target.value);
                        }}
                    >
                        <option>Choose a frequency</option>
                        {pageData.frequencies.map((frequency) => (
                            <option key={frequency._id} value={frequency._id}>
                                {frequency.title}
                            </option>
                        ))}
                    </select>

                    <select
                        className="add-warning-dropdown"
                        onChange={(event) => {
                             setType(event.target.value);
                        }}
                    >
                        <option>Choose a Type</option>
                        {pageData.types.map((type) => (
                            <option key={type._id} value={type._id}>
                                {type.title}
                            </option>
                        ))}
                    </select>

                    <select
                        className="add-warning-dropdown"
                        onChange={(event) => {
                             setSeverity(event.target.value);
                        }}
                    >
                        <option>Choose a Severity</option>
                        {pageData.severities.map((severity) => (
                            <option key={severity._id} value={severity._id}>
                                {severity.title}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="commentBox">Details:</label>
                    <textarea
                        id="commentBox"
                        rows="10"
                        cols="80"
                        onChange={(event) => {
                             setComment(event.target.value);
                        }}
                    />

                    <br />

                    <button
                        onClick={() => {
                            if (category && frequency && type && severity) {
                                setUnchosenError(false);
                                setWarnings(
                                    warnings.concat([
                                        {
                                            userID: userID,
                                            movieID: movieID,
                                            categoryID: category,
                                            frequencyID: frequency,
                                            typeID: type,
                                            severityID: severity,
                                            comment: comment,
                                        },
                                    ])
                                );
                            } else {
                                setUnchosenError(true);
                            }
                        }}
                    >
                        Add this warning
                    </button>
                </div>
                {unchosenError ? (
                    <div style={{ color: "red" }}>
                        Please choose a value from each dropdown
                    </div>
                ) : null}

                <br />
                <div className="part">
                    <button
                        onClick={() => {
                            CreateNewWarning(warnings);
                            setCurrentPage("Thanks");
                        }}
                    >
                        Send Data
                    </button>
                </div>
                <br />
                <div className="collapsible-tables">
                    <table className="center" border="2">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Frequency</th>
                                <th>Type</th>
                                <th>Severity</th>
                                <th>Comment</th>
                            </tr>
                        </thead>

                        {warnings.length > 0 ? (
                            <tbody>
                                {warnings.map((item) => (
                                    <tr key={'row'+warnings.indexOf(item)}>
                                        <td data-title="Category" key={"c" + warnings.indexOf(item)}>
                                            {findValueFromID(
                                                "categories",
                                                item.categoryID
                                            )}
                                        </td>
                                        <td data-title="Frequency" key={"f" + warnings.indexOf(item)}>
                                            {findValueFromID(
                                                "frequencies",
                                                item.frequencyID
                                            )}
                                        </td>
                                        <td data-title="Type" key={"t" + warnings.indexOf(item)}>
                                            {findValueFromID(
                                                "types",
                                                item.typeID
                                            )}
                                        </td>
                                        <td data-title="Severity" key={"s" + warnings.indexOf(item)}>
                                            {findValueFromID(
                                                "severities",
                                                item.severityID
                                            )}
                                        </td>
                                        <td data-title="Comment" key={"co" + warnings.indexOf(item)}>
                                            {item.comment}
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        ) : (
                            null
                        )}
                    </table>

                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
