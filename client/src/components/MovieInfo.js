import React, { useEffect, useState } from "react";
import "../css/App.css";
import { getWarnings, getTMDB } from "../requests/gets";
import Comments from "./Comments";
import { getAllResource } from "../requests/gets";
function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}
export default function ViewMovieInfo({
  setCurrentPage,
  tmdb,
  movieID,
  movieTitle,
  posterPath,
}) {
  const [warnings, setWarnings] = useState([]);
  const [warningModelData, setWarningModelData] = useState();
  const [movieDesc, setMovieDesc] = useState();
  const [showComments, setShowComments] = useState(false);
  const [commentCategory, setCommentCategory] = useState("");

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

  //    const category = findInfoFromID('categories', warning.categoryID, 'title')

  useEffect(() => {
    const getDescription = async () => {
      const desc = await getTMDB(tmdb);
      setMovieDesc(desc.overview);
    };
    const getWarningData = async () => {
      const warningData = await getWarnings(movieID);
      setWarnings(warningData);
    };
    const getData = async () => {
      await getWarningData();
      await getWarningModelData();
      await getDescription();
    };
    getData();
  }, [movieID, tmdb]);

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
    if (warning.comment) {
      warningTotals[warning.categoryID].hasComments = true;
    }
  });
  /*turning those lists of freq,types,sevs into a single number from the average */
  const warningAverages = [];
  Object.keys(warningTotals).forEach((category) => {
    warningAverages.push({
      hasComments: warningTotals[category].hasComments ? true : false,
      category: findInfoFromID("categories", category, "title"),
      frequency: Math.round(average(warningTotals[category].frequencies)),
      type: Math.round(average(warningTotals[category].types)),
      severity: Math.round(average(warningTotals[category].severities)),
    });
  });

  return (
    <>
      {showComments ? (
        <Comments
          warnings={warnings.map((warning) => {
            return {
              category: findInfoFromID(
                "categories",
                warning.categoryID,
                "title"
              ),
              comment: warning.comment,
            };
          })}
          commentCategory={commentCategory}
          setShowComments={setShowComments}
        />
      ) : (
        <></>
      )}
      <div className="collapsible-tables pageContainer threeQuartersPageContainer">
        <h2>{movieTitle}</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            right: "60%",
            top: "20%",
            marginBottom: "10px",
          }}
          id="movieDesc"
        >
          <div style={{ maxWidth: "600px", minWidth: "200px" }}>
            {movieDesc}
          </div>
          <img
            className="movieImage"
            style={{ width: "220px" }}
            src={" https://image.tmdb.org/t/p/w220_and_h330_face" + posterPath}
            alt="no "
          />
        </div>
        <div>
          {warningAverages.length !== 0 ? (
            <div>
              <h3>Warnings:</h3>
              <table border="2" style={{ borderColor: "#002b36" }}>
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
                    <tr key={warningAverages.indexOf(warning)}>
                      <td data-title="Category">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                          }}
                        >
                          {warning.category}
                          {warning.hasComments ? (
                            <button
                              className="btn btn-sm btn-danger"
                              style={{
                                margin: "2px 0",
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                              }}
                              onClick={() => {
                                setCommentCategory(warning.category);
                                setShowComments(true);
                              }}
                            >
                              comments
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                      <td data-title="Severity">
                        {warningLabelsfromValues.severities[warning.severity]}
                      </td>
                      <td data-title="Frequency">
                        {warningLabelsfromValues.frequencies[warning.frequency]}
                      </td>
                      <td data-title="Type">
                        {warningLabelsfromValues.types[warning.type]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h2 style={{ marginTop: "30px" }}>
                Be the first to add a warning!!
              </h2>
            </div>
          )}
        </div>
      </div>

      <div className="pageContainer warningPageContainer-Bottom">
        {window.sessionStorage.getItem("token") ? (
          <button
            className="btn btn-success"
            onClick={() => {
              setCurrentPage("AddWarning");
            }}
          >
            Add warning
          </button>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              setCurrentPage("SignIn");
            }}
          >
            Log In To Contribute
          </button>
        )}
      </div>
    </>
  );
}
