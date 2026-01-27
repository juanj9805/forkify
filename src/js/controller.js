const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function() {
  // const baseUrl = `https://forkify-api.jonas.io/api/v2/recipes`
  const baseUrl = `https://dummyjson.com/recipes`
  try {
    const response = await fetch(baseUrl)
    const data = await response.json()
    if(!response.ok) throw new Error(`${data.message} ${response.status}`)
      console.log(data);
      
    // Without destructuring
    // let recipe = data.data.recipe
    // With destructuring op
      let [recipe] = data.recipes
      
      recipe = {
        id : recipe.id,
        title : recipe.name,
        // publisher : recipe.publisher,
        // sourceUrl: recipe.source_url,
        img : recipe.image,
        cookingTime : recipe.prepTimeMinutes,
        ingredients : recipe.ingredients,
      }
      console.log(recipe);
        }catch (error){
    alert(error.message)
  }
}

showRecipe()