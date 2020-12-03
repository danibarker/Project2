import React, { useEffect, useState } from "react";
import "../css/App.css";
import { getWarnings } from "../requests/gets";

import { getAllResource } from "../requests/gets";
function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}
export default function ViewMovieInfo({ setCurrentPage, movieID, movieTitle }) {
  const [warnings, setWarnings] = useState([]);
  const [warningModelData, setWarningModelData] = useState();

  const findInfoFromID = (type, id, attr) => {
    for (let item of warningModelData[type]) {
      if (item._id === id) {
        return item[attr];
      }
    }
  };
  // Get all categories,freq,etc from database
  const getWarningModelData = async () => {
    const categories = await getAllResource("categories");
    const frequencies = await getAllResource("frequencies");
    const types = await getAllResource("types");
    const severities = await getAllResource("severities");
    setWarningModelData({
      categories: categories,
      frequencies: frequencies,
      types: types,
      severities: severities,
    });
  };
  const getWarningData = async () => {
    const warningData = await getWarnings(movieID);
    setWarnings(warningData);
  };

  //    const category = findInfoFromID('categories', warning.categoryID, 'title')

  useEffect(() => {
    const getData = async () => {
      await getWarningData();
      await getWarningModelData();
    };
    getData();
  }, []);
  
  if (!warningModelData) {
    return <h1>Loading...</h1>;
  }
  // lookup table of sorts, to convert a value into a title
  // possibly change to just be a function
  const warningLabelsfromValues = {
    frequencies: {},
    types: {},
    severities: {},
  };
  warningModelData.frequencies.forEach((frequency) => {
    warningLabelsfromValues.frequencies[frequency.value] = frequency.title;
  });
  warningModelData.types.forEach((type) => {
    warningLabelsfromValues.types[type.value] = type.title;
  });
  warningModelData.severities.forEach((severity) => {
    warningLabelsfromValues.severities[severity.value] = severity.title;
  });
  const warningTotals = {};

  /* Will create an object with all of the warnings accumulated together: eg:
  {violence: {frequencies: [1,1,2,3,2], sev: [1,2,4,5,2], type: [1,2,3,4,5]},
  blood: etc.....}
  */
  
  warnings.forEach((warning) => {
    const freq = findInfoFromID("frequencies", warning.frequencyID, "value");
    const sev = findInfoFromID("severities", warning.severityID, "value");
    const type = findInfoFromID("types", warning.typeID, "value");
    if (Object.keys(warningTotals).includes(warning.categoryID)) {
      warningTotals[warning.categoryID]["frequencies"].push(freq);
      warningTotals[warning.categoryID]["severities"].push(sev);
      warningTotals[warning.categoryID]["types"].push(type);
    } else {
      warningTotals[warning.categoryID] = {
        frequencies: [freq],
        severities: [sev],
        types: [type],
      };
    }
  });
  /*turning those lists of freq,types,sevs into a single number from the average */
  const warningAverages = [];
  Object.keys(warningTotals).forEach((category) => {
    warningAverages.push({
      category: findInfoFromID("categories", category, "title"),
      frequency: Math.round(average(warningTotals[category].frequencies)),
      type: Math.round(average(warningTotals[category].types)),
      severity :Math.round(
        average(warningTotals[category].severities)
      )
    });
  });
  

  return (
    <>
      <div className="collapsible-tables pageContainer threeQuartersPageContainer">
        <h2>{movieTitle}</h2>
        <h3>Warnings:</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Severity</th>
              <th>Frequency</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {warningAverages.map((warning) => (
              <tr>
                <td data-title="Category">{warning.category}</td>
                <td data-title="Severity">{warningLabelsfromValues.severities[warning.severity]}</td>
                <td data-title="Frequency">{warningLabelsfromValues.frequencies[warning.frequency]}</td>
                <td data-title="Type">{warningLabelsfromValues.types[warning.type]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pageContainer warningPageContainer-Bottom">
        <button onClick={() => {
          setCurrentPage('AddWarning')
        }}>Add warning</button>
      </div>
    </>
  );
}
