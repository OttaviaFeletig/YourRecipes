import React, {useEffect,  useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecipePreview from './RecipePreview';
import Navbar from './Navbar';
import Recipe from './Recipe';
import apiKey from './apiKey';
import '../styles/App.min.css';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('vegetarian')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&tags=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data.recipes);
    setRecipes(data.recipes);
  };

  const updateQuery = e => {
    console.log(query)
    setQuery(e.target.value)
  }

  return (
    < div className = "App" >
   < Navbar
    query = {query}
    updateQuery = {updateQuery}
    />
    <Router>
    <Switch>
    <Route path={`/recipe/:id`}>
    <Recipe/>
    </Route>
      </Switch>
    </Router>
    < div className = "recipes" > {
    recipes.map((recipe) => (

       < RecipePreview
       key={recipe.id}
       id = {recipe.id}
        title = {recipe.title}
        servings = {recipe.servings}
        image = {recipe.image}
        ingredients = {recipe.extendedIngredients}
        />))
      } < /div>
       < /div > );
  }

  export default App;
