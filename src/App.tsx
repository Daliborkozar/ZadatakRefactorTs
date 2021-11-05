import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import ListCategory from "./components/ListCategory";
import "./App.css";

export interface IState {
  mealcategory: {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }[];
}

function App() {
  const [mealcat, setMealcat] = useState<IState["mealcategory"]>([
    {
      idCategory: "",
      strCategory: "",
      strCategoryThumb: "",
      strCategoryDescription: "",
    },
  ]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setMealcat(data.categories);
        console.log(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  return (
    <div className="App">
      Hello world
      <div>
        <ListCategory mealcategory={mealcat} />
      </div>
    </div>
  );
}

export default App;

