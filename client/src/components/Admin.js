import React, { useState, useEffect } from "react";
import { addResource, removeResource, removeUser } from "../requests/posts";
import { getAllResource } from "../requests/gets";

export default () => {
  const [adminType, setAdminType] = useState(
    "Category",
    "Frequency",
    "Type",
    "Severity"
  );
  let pageToShow;
  const token = localStorage.getItem('token')
  if (adminType == "Category") {
    pageToShow = <Category token={token}/>;
  } else if (adminType === "Frequency") {
    pageToShow = <Frequency token={token}/>;
  } else if (adminType === "Type") {
    pageToShow = <Type token={token}/>;
  } else if (adminType === "Severity") {
    pageToShow = <Severity token={token}/>;
  } else {
    pageToShow = <User token={token} />;
  }
  return (
    <div>
      <select
        onChange={(e) => {
          setAdminType(e.target.value);
        }}
      >
        <option>Category</option>
        <option>Frequency</option>
        <option>Type</option>
        <option>Severity</option>
        <option>User</option>
      </select>
      {pageToShow}
    </div>
  );
};

const Category = ({ token }) => {
  const [categories, setCategories] = useState();
  const [newCategory, setNewCategory] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await getPageData();
    };
    getData();
  }, []);

  const getPageData = async () => {
    const currentCategories = await getAllResource("categories");
    setCategories(currentCategories);
  };

  const createNewCategory = async () => {
    setLoading(true);
    await addResource("category", { title: newCategory }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };

  const deleteCategory = async (deleteTitle) => {
    setLoading(true);
    await removeResource("category", { title: deleteTitle }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };
  if (loading) {
    return (
      <img alt="loading" src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
    );
  }
  if (!categories) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <div className="adminList">
          {categories.map((category) => (
            <li>
              {category.title}{" "}
              <button
                onClick={() => deleteCategory(category.title)}
                className="deletebtn"
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        </div>
      </ul>
      <div className="adminSubmit">
        <h1>Category</h1>
        <h2>Add</h2>
        <input
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
          placeholder="New Category Title"
        />
        <button onClick={createNewCategory} className="submitbtn">
          Submit
        </button>
      </div>
    </div>
  );
};

// Adding Frequencies

const Frequency = ({ token }) => {
  const [frequencies, setFrequencies] = useState();
  const [newFrequency, setNewFrequency] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await getPageData();
    };
    getData();
  }, []);

  const getPageData = async () => {
    const currentFrequencies = await getAllResource("frequencies");
    setFrequencies(currentFrequencies);
  };

  const createNewFrequency = async () => {
    setLoading(true);
    await addResource("frequency", { title: newFrequency, value: newValue },token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };

  const deleteFrequency = async (deleteTitle) => {
    setLoading(true);
    await removeResource("frequency", { title: deleteTitle }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };
  if (loading) {
    return (
      <img alt="loading" src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
    );
  }
  if (!frequencies) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <div className="adminList">
          {frequencies.map((frequency) => (
            <li>
              {frequency.title}{" "}
              <button
                onClick={() => deleteFrequency(frequency.title)}
                className="deletebtn"
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        </div>
      </ul>
      <div className="adminSubmit">
        <h1>Frequency</h1>
        <h2>Add</h2>
        <input
          onChange={(e) => {
            setNewFrequency(e.target.value);
          }}
          placeholder="New Frequency Title"
        />
        <input
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
          placeholder="New Frequency Value"
        />

        <button onClick={createNewFrequency} className="submitbtn">
          Submit
        </button>
      </div>
    </div>
  );
};

// Adding Type

const Type = ({token}) => {
  const [types, setTypes] = useState();
  const [newType, setNewType] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await getPageData();
    };
    getData();
  }, []);

  const getPageData = async () => {
    const currentTypes = await getAllResource("types");
    setTypes(currentTypes);
  };

  const createNewType = async () => {
    setLoading(true);
    await addResource("type", { title: newType, value: newValue },token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };

  const deleteType = async (deleteTitle) => {
    setLoading(true);
    await removeResource("type", { title: deleteTitle }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };
  if (loading) {
    return (
      <img alt="loading" src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
    );
  }
  if (!types) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <div className="adminList">
          {types.map((type) => (
            <li>
              {type.title}{" "}
              <button
                onClick={() => deleteType(type.title)}
                className="deletebtn"
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        </div>
      </ul>
      <div className="adminSubmit">
        <h1>Type</h1>
        <h2>Add</h2>
        <input
          onChange={(e) => {
            setNewType(e.target.value);
          }}
          placeholder="New Type Title"
        />
        <input
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
          placeholder="New Type Value"
        />

        <button onClick={createNewType} className="submitbtn">
          Submit
        </button>
      </div>
    </div>
  );
};

// Adding Severity
const User = ({ token }) => {
  const [selectedUser, setSelectedUser] = useState();
  const [deleted, setDeleted] = useState();

  return (
    <div>
      <input
        placeholder="username"
        onChange={(e) => {
          setSelectedUser(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          try {
            let response = await removeUser(selectedUser);
            if (response.deletedCount) {
              setDeleted(`Successful deletion of ${selectedUser}`);
            } else {
              setDeleted(
                "Sorry, could not find user, check the name"
                
              );
            }
          } catch (e) {
            setDeleted(e)
          }
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
      <div>{deleted}</div>
    </div>
  );
};
const Severity = ({ token }) => {
  const [severities, setSeverities] = useState();
  const [newSeverity, setNewSeverity] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await getPageData();
    };
    getData();
  }, []);

  const getPageData = async () => {
    const currentSeverities = await getAllResource("severities");
    setSeverities(currentSeverities);
  };

  const createNewSeverity = async () => {
    setLoading(true);
    await addResource("severity", { title: newSeverity, value: newValue }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };

  const deleteSeverity = async (deleteTitle) => {
    setLoading(true);
    await removeResource("severity", { title: deleteTitle }, token);
    setTimeout(() => {
      getPageData();
      setLoading(false);
    }, 2000);
  };
  if (loading) {
    return (
      <img alt="loading" src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
    );
  }
  if (!severities) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <div className="adminList">
          {severities.map((severity) => (
            <li>
              {severity.title}{" "}
              <button
                onClick={() => deleteSeverity(severity.title)}
                className="deletebtn"
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        </div>
      </ul>
      <div className="adminSubmit">
        <h1>Severity</h1>
        <h2>Add</h2>
        <input
          onChange={(e) => {
            setNewSeverity(e.target.value);
          }}
          placeholder="New Severity Title"
        />
        <input
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
          placeholder="New Severity Value"
        />

        <button onClick={createNewSeverity} className="submitbtn">
          Submit
        </button>
      </div>
    </div>
  );
};
