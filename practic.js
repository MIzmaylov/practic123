"use strict"
let numberOfFilms = prompt("Сколько фильмов вы посмторели?","");//1 practic

let nameFilms1 = prompt("Напишите один из последних просмотренных фильмов","логан");
let rateFilms1 = prompt("На сколько вы его оценили?","5")
let nameFilms2 = prompt("Напишите один из последних просмотренных фильмов","матрица");
let rateFilms2 = prompt("На сколько вы его оценили?","7")

let personalMovieDB = {
    count:numberOfFilms,
    movies: {films1:{name:nameFilms1,rate:rateFilms1},
        films2:{name:nameFilms2,rate:rateFilms2}
},
    actors:{},
    genres:[],
    privat:false
};
document.write("<h3>Ваши любимые фильмы</h3>");
    document.write(`${personalMovieDB.movies.films1.name}, оценка:${personalMovieDB.movies.films1.rate}<br/> 
    ${personalMovieDB.movies.films2.name}, оценка:${personalMovieDB.movies.films2.rate}<br/>`);

document.write(`всего вы посмотрели - ${numberOfFilms}`);