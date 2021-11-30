import {randomRecipe} from './randomRecipe';
let recipes = [];

export const getAllRecipes = async query => {
  /* const params = {
    s: 'Arrabiata',
  }; */

  for (let i = 0; i < 13; i++) {
    try {
      const data = await randomRecipe.get('/');
      /* if (data) {
      return data.Search;
    } */
      //console.log(data);
      recipes = [...recipes, data];
      console.log(recipes);
      //return recipes;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
};

export {recipes};
