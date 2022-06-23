"use strict"



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмторели?", "");
        while (personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы посмторели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Напишите один из последних просмотренных фильмов", "логан"),
                b = prompt("На сколько вы его оценили?", "5");

            if (a != null && a != "" && a.length < 50 && b != null && b != "") {
                personalMovieDB.movies[a] = b;
                console.log("done!")
            } else {
                console.log("Error!");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count < 30) {
            alert("вы класссический зритель")
        } else
        if (personalMovieDB.count >= 30) {
            alert("вы киноман")
        } else {
            alert("Error")
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function () {
        for (let k = 1; k <= 3; k++) {
            personalMovieDB.genres[k-1] = prompt(`Ваш любимы жанр под номером ${k}?`, "");
            if (personalMovieDB.genres[k-1] != null && personalMovieDB.genres[k-1] != "") {
                
            } else {
                console.log("Error!");
                k--;  
            }}
            personalMovieDB.genres.forEach((item, key) => {
                console.log(`Любимый жанр ${key+1} - это ${item}`)
            })        
            },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
                    } else {
            personalMovieDB.privat = true;
                }
    }
}
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);