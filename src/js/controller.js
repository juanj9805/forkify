import 'core-js';
import 'regenerator-runtime';
import * as Model from './model.js';
import recipeView from './views/recipeView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // spinner(recipeContainer);
    // recipeView.renderSpinner();
    recipeView.renderSpinner();
    // Loading recipe
    await Model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(Model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
