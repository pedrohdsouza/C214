class Film {
    constructor(title, year, gender, duration){
        this.title = title;
        this.year = year;
        this.gender = gender;
        this.duration = duration;
        this.watched = null;
        this.rate = null;
    }

    listMovieAsWatched() {
        this.watched = true;
    }

    rateMovie(rate) {
        this.rate = rate;
    }
}

const filmList = [];

function addFilm(title, year, gender, duration) {
    const film = new Film(title, year, gender, duration);
    filmList.push(film);
    console.log(`${title} foi adicionado a lista de filmes.`);
    getMenuChoice();
  }

function addFilmDetails() {
    rl.question('Título: ', title => {
        rl.question('Ano: ', year => {
            rl.question('Gênero: ', gender => {
                rl.question('Duração: ', duration => {
                    addFilm(title, year, gender, duration)
                });
            });
        });
    });
}

function markFilmAsWatched() {
    rl.question('Enter the title of the movie you want to mark as watched: ', title => {
        const film = filmList.find(film => film.title === title);
        if (film) {
            film.listMovieAsWatched();
            console.log(`${film.title} marked as watched.`);
        } else {
            console.log(`Movie with title '${title}' not found.`);
        }
        getMenuChoice();
    });
}

function rateFilm() {
    rl.question('Enter the title of the movie you want to rate: ', title => {
        const film = filmList.find(film => film.title === title);
        if (film) {
            rl.question('Enter the rate: ', rate => {
                film.rateMovie(rate);
                console.log(`${film.title} rated with ${film.rate}.`);
                getMenuChoice();
            });
        } else {
            console.log(`Movie with title '${title}' not found.`);
            getMenuChoice();
        }
    });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function displayMenu() {
    console.log("Menu:");
    console.log("1. Add a new film");
    console.log("2. Mark a movie as watched");
    console.log("3. Rate a film");
    console.log("4. Show the film list");
    console.log("5. Exit the program");
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
        addFilmDetails();
        break;
    case '2':
        markFilmAsWatched();
        break;
    case '3':
      rateFilm();
      break;
    case '4':
        console.log("--- Lista de filmes ---");
        console.log(filmList);
        getMenuChoice();
        break;
    case '5':
      console.log('Exiting the program, Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please select a valid option.');
      getMenuChoice();
      break;
  }
}

function getMenuChoice() {
  displayMenu();
  rl.question('Enter your choice: ', (choice) => {
    handleChoice(choice);
  });
}

getMenuChoice();
