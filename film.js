class Film {
    constructor(name, year, gender, duration){
        this.name = name;
        this.year = year;
        this.gender = gender;
        this.duration = duration;
        this.watched = null;
        this.rate = null;
    }

    searchFilmDuration(){
        console.log(`O filme ${this.name} tem duração de ${this.duration}.`);
    }

    listMovieAsWatched() {
        this.watched = true;
        console.log(`O filme ${this.name} foi assistido.`);
    }

    rateMovie(rate) {
        this.rate = rate;
        console.log(`O filme ${this.name} recebeu nota ${this.rate}.`);
    }
}

    const filmOne = new Film ('Wolverine - Imortal', 2013, 'Ação/Ficção Científica', '2h6m')
    const filmTwo = new Film ('X-Men: Primeira Classe', 2011, 'Ação/Aventura', '2h12m')
    const filmThree = new Film ('Beleza Oculta', 2016, 'Romance/Drama', '1h37m')

    filmOne.searchFilmDuration();
    filmTwo.searchFilmDuration();
    filmThree.searchFilmDuration();
    console.log()

    filmOne.listMovieAsWatched();
    filmOne.rateMovie(4.6);
    console.log()

    filmTwo.listMovieAsWatched();
    filmTwo.rateMovie(5);
    console.log()

    filmThree.listMovieAsWatched();
    filmThree.rateMovie(4.8);
    console.log()