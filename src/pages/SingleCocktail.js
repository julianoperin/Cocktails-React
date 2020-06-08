import React from "react";
import { useParams } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          console.log(data.drinks);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }
    getCocktail();
  }, [id]);

  return (
    <div>
      hello
      <h1>Single Cocktail: {id}</h1>
    </div>
  );
};

export default SingleCocktail;
