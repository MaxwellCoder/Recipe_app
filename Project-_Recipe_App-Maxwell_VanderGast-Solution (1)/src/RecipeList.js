import React from "react";
import RecipeViewer from "./RecipeViewer"

//Use 10% or 30%?
function RecipeList({recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Cuisine</th>
            <th style={{width:"10%"}}>Photo</th>            
            <th style={{width:"30%"}}>Ingredients</th>
            <th style={{width:"30%"}}>Preparation</th>
            <th style={{width:"10%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeViewer deleteRecipe={() => deleteRecipe(index)} key={index} recipe={recipe}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
