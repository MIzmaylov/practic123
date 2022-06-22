"use strict"
let numberOfFilms = +prompt("Сколько фильмов вы посмторели?","");



let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


/*document.write(`всего вы посмотрели - ${numberOfFilms}`);

for (let i=0;i<2;i++){
    const a = prompt("Напишите один из последних просмотренных фильмов","логан"),
    b = prompt("На сколько вы его оценили?","5");


if (a != null && a!= false && a!= "" && a.length<50 && b != null && b!= false && b!= "") {
    personalMovieDB.movies[a]=b;
   console.log("done!")} else{
    console.log("Error!");
    i--;
    }};


console.log(personalMovieDB);*/
if (personalMovieDB.count<10) {
    alert("Просмотрено довольно мало фильмов") 
} else if (personalMovieDB.count<30) {
    alert("вы класссический зритель")} else if (personalMovieDB.count>=30) {alert("вы киноман")} else {alert("Error")};