const numberOfFilms = prompt("Сколько фильмом вы уже посмотрели",'');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false,

};

const lastUserFilms = prompt("Один из последних просмотрених фильмом",''),
      scoreFilms = prompt("На сколько оцените его",''),
      lastUserFilms2 = prompt("Один из последних просмотрених фильмом",''),
      scoreFilms2 = prompt("На сколько оцените его",'');


personalMovieDB.movies[lastUserFilms]=scoreFilms;
personalMovieDB.movies[lastUserFilms2]=scoreFilms2;

console.log(personalMovieDB);