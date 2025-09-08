import { useState } from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  return (
    <main className="main">
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="add ingredient"
          placeholder="e.g. Avocado"
          name="ingredient"
        />
        <button> Add Ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientList ingredients={ingredients} showRecipe={showRecipe}/>}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
