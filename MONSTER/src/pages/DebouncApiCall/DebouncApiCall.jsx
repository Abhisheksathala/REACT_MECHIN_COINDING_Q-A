import React, { useState, useEffect } from "react";

const DebouncApiCall = () => {
  const [searchparam, setSearchparam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceparamvalue}`,
      );
      const result = await apiResponse.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes([]);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }

  function useDebounce(paramValue, delay = 1000) {
    const [debounceValue, setDebounceValue] = useState(paramValue);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebounceValue(paramValue);
      }, delay);

      return () => clearTimeout(timeoutId);
    }, [paramValue, delay]);

    return debounceValue;
  }

  const debounceparamvalue = useDebounce(searchparam, 1000);

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceparamvalue]);

  return (
    <div>
      <h1 className="text-4xl">DebouncApiCall</h1>
      <input
        type="text"
        value={searchparam}
        onChange={(e) => setSearchparam(e.target.value)}
        placeholder="plz enter"
      />
      {pending ? <h3>Pending ! Please wait</h3> : null}
      <ul>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipeItem) => <li>{recipeItem.name}</li>)
        ) : (
          <h3>No Recipes found ! Please try with different search</h3>
        )}
      </ul>
    </div>
  );
};

export default DebouncApiCall;
