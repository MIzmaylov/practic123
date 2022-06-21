"use strict"
let numberOfFilms = prompt("Сколько фильмов вы посмторели?","");//1 practic



let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


//document.write(`всего вы посмотрели - ${numberOfFilms}`);

let a = prompt("Напишите один из последних просмотренных фильмов","логан");
let b = prompt("На сколько вы его оценили?","5")
let c = prompt("Напишите один из последних просмотренных фильмов","матрица");
let d = prompt("На сколько вы его оценили?","7");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

