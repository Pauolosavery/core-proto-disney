/**
 * Человек.
 * @param {string} name
 */
 const { Cartoon, DisneyCartoon, DreamWorksCartoon } = require('../src/cartoon');

function Person(name,watchedMovies) {
  
  this.name = name;
  this.watchedMovies = watchedMovies;

  // watchMovie: function () {
  //   play
  // }
}

Person.prototype.watchMovie = function (movie) {
  movie.play();
  if (!this.watchedMovies.includes(movie)){
    this.watchedMovies.push(movie)
  }
};

module.exports = { Person };
