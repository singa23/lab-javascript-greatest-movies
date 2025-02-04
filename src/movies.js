// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const director = moviesArray.map(function (el) {
    return el.director;
  });
  return director;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length ===0){
        return 0
    }
  const spielberg = moviesArray.filter(function (el) {
    return el.director === "Steven Spielberg" && el.genre.includes("Drama");
  })
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0
  }
  const scoreTotal = moviesArray.reduce(function (acc, el){
return acc + (el.score || 0) / moviesArray.length
},0)
return Math.round(scoreTotal*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (el) {
    return el.genre.includes("Drama");
  })
  const scoreTotal = dramaMovies.reduce(function (acc, el){
    return acc + (el.score || 0) / dramaMovies.length
    },0)
  return Math.round(scoreTotal*100)/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesOrder = moviesArray.slice();
  moviesOrder = moviesOrder.sort(function (a, b) {
    if (a.year < b.year) return -1; // a is less than b
    if (a.year > b.year) return 1; // a is greater than b
    if (a.year === b.year) {
      if (a.title < b.title) return -1; 
      if (a.title > b.title) return 1; 
    }
    return 0; 
  });
  return moviesOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  let moviesOrderAl = moviesArray.slice();
  moviesOrderAl = moviesOrderAl.sort(function (a, b) {
    if (a.title < b.title) return -1; // a is less than b
    if (a.title > b.title) return 1; // a is greater than b
    if (a.title === b.title) return 0
    //return moviesOrderAl; 
  });
  moviesOrderAl.splice(20,moviesOrderAl.length-20)
  const autre  = moviesOrderAl.map(function (el) {
    return el.title;
  });
  return autre;
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
