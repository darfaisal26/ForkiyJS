import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// if(module.hot){
//   module.hot.accept();
// }
const controlRecipes = async function () {

  try {

    const id = window.location.hash.slice(1);
    if (!id) return;

    // reneder spinner
    recipeView.renderSpinner();

    // 1) LOADING RECIPE
    await model.loadRecipe(id)

    // 2) RENDERING RECIPE
    recipeView.render(model.state.recipe)
// Test 

    //  controlServings();
  } catch (err) {
    recipeView.renderError();

  }
};

// SEARCH RESULTS
const controlSearchResults = async function () {
  try {
  resultsView.renderSpinner();
  // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) load search results
    await model.loadSearchResults(query);
    // 3) render results
    resultsView.render(model.getResultPerPage())
    // render initail pagination 
    paginationView.render(model.state.search)
  } catch (err) {
    console.log(err)
  }
};
const controlPagination = function(goToPage){
  console.log(goToPage);
    // 3) render  new results
    resultsView.render(model.getResultPerPage(goToPage))
    // render new  pagination  buttons
    paginationView.render(model.state.search)
}




const init = function () {
  recipeView.addHandlerRender(controlRecipes)

  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}
init();