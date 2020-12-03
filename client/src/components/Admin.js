import React, { useState, useEffect } from "react";
import { addResource } from "../requests/posts";
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
// const Frequency = () => {
//   return <h1>Frequency</h1>
// }

const Category = () => {
  const [categories, setCategories] = useState();
  const [newCategory, setNewCategory] = useState();
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
    await addResource("category", { title: newCategory});
    setTimeout(() => {
      getPageData();
    }, 2000);
  };
  if (!categories) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {categories.map((category) => (
            <li>{category.title}</li>
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
        <button onClick={createNewCategory}>Submit</button>
      </div>
    </div>
  );


};








// Adding Frequencies

const Frequency = () => {
  const [frequencies, setFrequencies] = useState();
  const [newFrequency, setNewFrequency] = useState();
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
    await addResource("frequency", { title: newFrequency, value:newFrequency});
    setTimeout(() => {
      getPageData();
    }, 2000);
  };
  if (!frequencies) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {frequencies.map((frequency) => (
            <li>{frequency.title}</li>
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
        <button onClick={createNewFrequency}>Submit</button>
      </div>
    </div>
  );


};

// Adding Type

const Type = () => {
  const [types, setTypes] = useState();
  const [newType, setNewType] = useState();
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
    await addResource("type", { title: newType});
    setTimeout(() => {
      getPageData();
    }, 2000);
  };
  if (!types) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {types.map((type) => (
            <li>{type.title}</li>
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
          placeholder="New Frequency Title"
        />
        <button onClick={createNewType}>Submit</button>
      </div>
    </div>
  );


};

// Adding Severity


const Severity = () => {
  const [severities, setSeverities] = useState();
  const [newSeverity, setNewSeverity] = useState();
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
    await addResource("severity", { title: newSeverity});
    setTimeout(() => {
      getPageData();
    }, 2000);
  };
  if (!severities) {
    return <h1>Loading, please wait....</h1>;
  }
  return (
    <div>
      <ul>
        <div>
          {severities.map((severity) => (
            <li>{severity.title}</li>
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
        <button onClick={createNewSeverity}>Submit</button>
      </div>
    </div>
  );


};
