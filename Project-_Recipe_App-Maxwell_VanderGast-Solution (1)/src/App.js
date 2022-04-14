import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeHeader from "./RecipeHeader";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  // Make recipe adding option
  const addRecipe = (recipeToAdd) => setRecipes([ ...recipes, recipeToAdd]);
  // Make recipt delete option
  const deleteRecipe = (recipeToDelete) => {
    //Filter Recipes
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== recipeToDelete))
  }
  return (
    <div className="App">
      <RecipeHeader/>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe = {deleteRecipe}/>
      <RecipeCreate 
        addRecipe = {addRecipe}/>
    </div>
  );
}

export default App;
