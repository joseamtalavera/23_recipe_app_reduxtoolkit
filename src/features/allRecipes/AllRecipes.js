import React, {useEffect} from 'react';

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from './allRecipesSlice.js';
import { FavoriteButton } from '../../components/FavoriteButton.js';
import { Recipe } from '../../components/Recipe.js';

const favoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = ({allRecipes, dispatch}) => {

    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [])

    const onAddRecipeHandler = (recipe)=> {
        dispatch(addRecipe(recipe));
    };


    return (
        <div className='recipes-container'>
            {allRecipes.map((recipe) => (
                <Recipe 
                recipe={recipe}
                key={recipe.id}>
                    <FavoriteButton 
                    onClickHandler={() => onAddRecipeHandler(recipe)}
                    icon={favoriteIconUrl}>
                        Add to Favorites
                    </FavoriteButton>
                </Recipe>
            ))}
        </div>
    );
}
