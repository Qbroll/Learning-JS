const numberOfFilms = +prompt("Сколько фильмом вы уже посмотрели",'');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false,

};


for( let i = 0; i<2;i++ ){

    const lastUserFilms = prompt("Один из последних просмотрених фильмом",''),
          scoreFilms = prompt("На сколько оцените его",'');

          if(lastUserFilms.length < 50 && lastUserFilms!=null && scoreFilms!=null && lastUserFilms != "" && scoreFilms != "" && scoreFilms.length < 50){
            personalMovieDB.movies[lastUserFilms]=scoreFilms;
            console.log('done');
          } else{
            console.log('error');
            i--;
          }

}

if(personalMovieDB.count < 10){
    alert("Вам присвоен статут 'Новичек'");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вам присвоен статут 'Шарящий'");
} else if (personalMovieDB.count >= 30 ){
    alert("Вам присвоен статут 'Are you crazy'");
} else {
    console.log('Ошибка');
}
console.log(personalMovieDB);