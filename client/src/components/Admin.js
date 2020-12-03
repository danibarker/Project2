import React, { useState, useEffect } from "react";
import { addResource } from "../requests/posts";
import { getAllResource } from "../requests/gets";


export default ({ setCurrentPage }) => {
  const [adminType, setAdminType] = useState("Category");
  let pageToShow;
  if (adminType == 'Category') {
    pageToShow = <Category />
  } else if (adminType == 'Frequency') {
    pageToShow = <Frequency />
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
      </select>
      {pageToShow}
    </div>
  );
};
const Frequency = () => {
  return <h1>Frequency</h1>
}

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
