import React, { useState } from 'react';
import PublishRecipeStyles from '../styles/PublishRecipe.module.css'

function PublishRecipe() {
  const [ingredients, setIngredients] = useState([{ ingredient: ''}]);

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: ''}]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className={PublishRecipeStyles.publish}>
      <form className="recipe-form" onSubmit={handleSubmit}>
        <h2>Nom Nom Your Recipe!</h2>
        <div className="form-group">
          <label htmlFor="name">Recipe Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" className="form-control-file" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" className="form-control"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <div id="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <div className="ingredient" key={index}>
                <input type="text" name="ingredient" placeholder="Ingredient" value={ingredient.ingredient} onChange={(event) => handleIngredientChange(event, index)} className="form-control" />
                <button type="button" className="btn btn-danger remove-ingredient" onClick={() => handleRemoveIngredient(index)}>X</button>
              </div>
            ))}
            <button type="button" className="btn btn-success add-ingredient" onClick={handleAddIngredient}>Add Ingredient</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" className="form-control"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PublishRecipe;
