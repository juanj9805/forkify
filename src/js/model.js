export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const baseUrl = `https://dummyjson.com/recipes/${id}`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    // const recipes = []
    let recipe = data;

    state.recipe = {
      id: recipe.id,
      title: recipe.name,
      img: recipe.image,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      cookingTime: recipe.prepTimeMinutes,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
