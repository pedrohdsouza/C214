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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filmList = [];

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
      console.log('You chose Option 1');
      break;
    case '2':
      console.log('You chose Option 2');
      break;
    case '3':
      console.log('You chose Option 3');
      break;
    case '4':
      console.log('Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please select a valid option.');
      break;
  }
}

function getMenuChoice() {
  displayMenu();
  rl.question('Enter your choice: ', (choice) => {
    handleChoice(choice);
    if (choice !== '4') {
        getMenuChoice(); // Display menu again if the choice is not 'Exit'
    0}
  });
}

getMenuChoice();

