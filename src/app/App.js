import React from 'react';


import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

const getFilteredRecipes = (recipes, searchTerm) => {
  return recipes.filter(recipes =>
    recipes.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

export const App = ({state, dispatch}) => {
  

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipies = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);


  return(
    <main>

      <section>
        <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
        />
      </section>

      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes
        favoriteRecipes={visibleFavoriteRecipies}
        dispatch={dispatch}
        />
        </section>

        <hr />

        <section>
          <h2>All Recipes</h2>
          <AllRecipes
          allRecipes={visibleAllRecipes}
          dispatch={dispatch}
          />
        </section>
    
    </main>
  )

}


