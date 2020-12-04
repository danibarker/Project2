    import React, { useState, useEffect } from "react";
import { addResource, removeResource } from "../requests/posts";
import { getAllResource } from "../requests/gets";


export default ({ setCurrentPage }) => {
  const [adminType, setAdminType] = useState("Category", "Frequency", "Type", "Severity");
  let pageToShow;
  if (adminType == 'Category') {
    pageToShow = <Category />
  }  else if (adminType == 'Frequency') {
    pageToShow = <Frequency />
  } else if (adminType == 'Type') {
    pageToShow = <Type />
  } else if (adminType == 'Severity') {
    pageToShow = <Severity />
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
      </select>
      {pageToShow}
    </div>
  );
};

const Category = () => {
  const [categories, setCategories] = useState();
  const [newCategory, setNewCategory] = useState();
  const [loading, setLoading] = useState(false)
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
    await addResource("category", { title: newCategory});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  };

  const deleteCategory = async (deleteTitle) => {
    setLoading(true);
    await removeResource("category", { title: deleteTitle});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  }
  if (loading) {
    return <img src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
  }
  if (!categories) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {categories.map((category) => (
            <li>{category.title} <button onClick={() => deleteCategory(category.title)} class="deletebtn"> Remove </button></li>
          ))}
        </div>
      </ul>
      <div>
        <h1>Category</h1>
        <h2>Add</h2>
        <input
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
          placeholder="New Category Title"
        />
        <button onClick={createNewCategory} class="submitbtn">Submit</button>
      </div>
    </div>
  );

};


// Adding Frequencies

const Frequency = () => {
  const [frequencies, setFrequencies] = useState();
  const [newFrequency, setNewFrequency] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false)
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
    await addResource("frequency", { title: newFrequency, value: newValue});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  };

  const deleteFrequency = async (deleteTitle) => {
    setLoading(true);
    await removeResource("frequency", { title: deleteTitle});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  }
  if (loading) {
    return <img src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
  }
  if (!frequencies) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {frequencies.map((frequency) => (
            <li>{frequency.title} <button onClick={() => deleteFrequency(frequency.title)} class="deletebtn"> Remove </button></li>
          ))}
        </div>
      </ul>
      <div>
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


        <button onClick={createNewFrequency} class="submitbtn">Submit</button>
      </div>
    </div>
  );

};


// Adding Type

const Type = () => {
  const [types, setTypes] = useState();
  const [newType, setNewType] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false)
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
    await addResource("type", { title: newType, value: newValue});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  };

  const deleteType = async (deleteTitle) => {
    setLoading(true);
    await removeResource("type", { title: deleteTitle});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  }
  if (loading) {
    return <img src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
  }
  if (!types) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {types.map((type) => (
            <li>{type.title} <button onClick={() => deleteType(type.title)} class="deletebtn"> Remove </button></li>
          ))}
        </div>
      </ul>
      <div>
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


        <button onClick={createNewType} class="submitbtn">Submit</button>
      </div>
    </div>
  );

};

// Adding Severity

const Severity = () => {
  const [severities, setSeverities] = useState();
  const [newSeverity, setNewSeverity] = useState();
  const [newValue, setNewValue] = useState();
  const [loading, setLoading] = useState(false)
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
    await addResource("severity", { title: newSeverity, value: newValue});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  };

  const deleteSeverity = async (deleteTitle) => {
    setLoading(true);
    await removeResource("severity", { title: deleteTitle});
    setTimeout(() => {
      getPageData();
      setLoading(false)
    }, 2000);
  }
  if (loading) {
    return <img src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" />
  }
  if (!severities) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {severities.map((severity) => (
            <li>{severity.title} <button onClick={() => deleteSeverity(severity.title)} class="deletebtn"> Remove </button></li>
          ))}
        </div>
      </ul>
      <div>
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


        <button onClick={createNewSeverity} class="submitbtn">Submit</button>
      </div>
    </div>
  );

};