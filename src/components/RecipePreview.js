import React, { useState, useContext } from 'react';
import {
  Link
} from 'react-router-dom';
import Ingredient from './Ingredient';
import ToggleBookmark from './ToggleBookmark';
import style from '../styles/recipe.module.css';

const RecipePreview = ({
  title,
  image,
  ingredients,
  id,
}) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (<div className = {style.recipe} >
     <div className = {style.header} >
    </div>
     <section className = {style.about} >
    <div className = {style.recipe__fotos} >
    <div className = "flip_box" >
    <div className = "flip_box__inner" >
    <div className = "flip_box__front" >
    <img src = {image}
    alt = {'Sorry, but no image of ' + title }
    className = {image ? style.image : style.alt}/>
     < /div >
     <div className = "flip_box__back" >
     <h2 className = {style.title} >
     {title}
     </h2 >
  <ToggleBookmark
       id={id}
       title={title}
       image={image}/ > 
  {ingredients.length > 0 ?  <button className = "toggleIngredient"
    onClick = {() => setShowIngredients(!showIngredients)
    } >
    Ingredients
    </button> : ''}
    <button className = "goToRecipe" >
    <Link to={'recipe/' + id}>Go to Recipe</Link>
    </button >

     </div >
     </div >
     </div >
     </div >
     </section >
    <Ingredient ingredients = {ingredients}
    showIngredients = {showIngredients}
    setShowIngredients = {setShowIngredients}/>
  </div >

  );
};

export default RecipePreview;
