import axios from 'axios';
// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
// https://api.spoonacular.com/recipes/random?apiKey=728a06a31377461f89d72cb2b45ed5b3

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const randomRecipe = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

// www.themealdb.com/api/json/v1/1/list.php?c=list
const CategoriesList = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  timeout: 30000,
});

/* client.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      apiKey: '728a06a31377461f89d72cb2b45ed5b3',
      type: 'recipes',
    },
  };
});
*/
export {randomRecipe, CategoriesList};
