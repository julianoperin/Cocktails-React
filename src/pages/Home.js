import React, { useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  React.useEffect(() => {
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {});
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
