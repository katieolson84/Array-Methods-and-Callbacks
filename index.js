import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data*/

// (a) Home Team name for 2014 world cup final
const teams = fifaData.filter(teams => teams.Year === 2014 && teams.Stage === "Final");
console.log(teams);
console.log(teams[0]["Home Team Name"]);

// (b) Away Team name for 2014 world cup final
console.log(teams[0]["Away Team Name"]);

// (c) Home Team goals for 2014 world cup final

console.log(teams[0]["Home Team Goals"]);

// (d) Away Team goals for 2014 world cup final

console.log(teams[0]["Away Team Goals"]);

// (e) Winner of 2014 world cup final 




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

 const allFinals = fifaData.filter(allFinals => allFinals.Stage === "Final");
    console.log(allFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const getYears = allFinals.map(getYears => getYears.Year);

console.log(getYears);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback){
    const country = callback.map((winners) => {
        if(winners["Home Team Goals"] > winners["Away Team Goals"]){
            return winners["Home Team Name"];
        } 
        else{
            return winners["Away Team Name"];
        }
});
return country;
};
console.log(getWinners(allFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnerByYear(cbWinners, cbYears){
    const finals = cbWinners.map((item, i) => {
        console.log(`In ${cbYears[i]}, ${item}, won the world cup!`);
    })
}
console.log(getWinnerByYear(getWinners(allFinals), getYears));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data){
    var avHomeNum = data.reduce((avg, game) => {
        return avg += game["Home Team Goals"];
    }, 0);
    var avAwayNum = data.reduce((avg, game) => {
        return avg += game["Away Team Goals"];
    }, 0);
    let avHome = avHomeNum/data.length;
    let avAway = avAwayNum/data.length;
    return `Home Average Goals: ${avHome} \n Away Average Goals: ${avAway}`;
}
console.log(getAverageGoals(fifaData));




/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
