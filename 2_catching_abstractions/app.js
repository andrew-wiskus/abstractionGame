/**
 * This following code needs some abstraction.
 * It's pretty hard to follow what is going on...
 * You're our only hope!
 *
 * STRATEGY
 * - If code is repeated, make that logic into a reusable function
 * - Create functions that modify a single entity/object at a time
 * - Wherever possible, try not to rely on global variables
 * - Run your code after every change to make sure it still works
 */

function Character(name, luck, isVillain) {
    this.name = name;
    this.luck = luck;
    this.isVillain = isVillain;
    this.isAlive = true;
}

// heroes
var katniss = new Character('Katniss', 10, false);
var peeta = new Character('Peeta', 6, false);
var haymitch = new Character('Haymitch', 10, false);
var johanna = new Character('Johanna', 8, false);

// Capitol scum
var oneScum = new Character('A', 5, true);
var twoScum = new Character('B', 5, true);
var threeScum = new Character('C', 6, true);
var fourScum = new Character('D', 7, true);

var firstRoster = new Roster([katniss, peeta, haymitch, johanna, oneScum, twoScum, threeScum, fourScum]);

conclusion(firstRoster.heroes, firstRoster.villians, 0, 0);




function Roster(allPlayers) {
    var villians = [];
    var heroes = [];
    allPlayers.forEach(function(player) {
        if (player.isVillain) {
            villians.push(player);
        } else {
            heroes.push(player);
        }

    });
    this.heroes = heroes;
    this.villians = villians;
    console.log(this);
}
// create 10 matches
// match a random hero with a random capitol villain from list of heroes/villians
function createRandomMatches(heroList, villianList) {
    var randomMatches = [];

    for (var i = 0; i < 10; i++) {
        var match = [];

        var hero = randomWholeNumber(0, heroList.length - 1);
        match.push(heroList[hero]);

        var villain = randomWholeNumber(0, villianList.length - 1);
        match.push(villianList[villain]);

        randomMatches.push(match);
    }
    return randomMatches;
}

// determine the winner and loser for each match, returns score
function runMatches(theHeroes, theVillians, heroesScore, villiansScore) {
    var matchList = createRandomMatches(theHeroes, theVillians);
    var score = {
        heroes: heroesScore,
        villians: villiansScore
    };

    matchList.forEach(function(element) {

        if (element[0].isAlive && element[1].isAlive) { // if both contestants alive, run the match
            if (element[0].luck > element[1].luck) { // if hero luck greater than villain luck
                score.heroes++; // add a win for the heroes

                element[0].luck++; // increase the hero's luck
                if (element[0].luck > 10) { // winner's luck cannot be above 10
                    element[0].luck = 10;
                }

                element[1].luck--; // decrease the villain's luck
                if (element[1].luck < 0) { // if the luck falls below zero, character is dead
                    element[1].isAlive = false;
                }
            } else if (element[0].luck < element[1].luck) { // if hero luck less than villain luck, villain wins
                score.villians++; // add a win for the capitol/villains

                element[1].luck++; // increase the villain's luck
                if (element[1].luck > 10) { // winner's luck cannot be above 10
                    element[1].luck = 10;
                }

                element[0].luck--; // decrease the hero's luck
                if (element[0].luck < 0) { // if the luck falls below zero, character is dead
                    element[0].isAlive = false;
                }
            }
        } else if (!element[1].isAlive && element[0].isAlive) { // if the villain is not alive, but the hero is, automatic win for hero
            score.heroes++; // add a win for the heroes

            element[0].luck++; // increase the hero's luck
            if (element[0].luck > 10) { // winner's luck cannot be above 10
                element[0].luck = 10;
            }

            element[1].luck--; // decrease the villain's luck
            if (element[1].luck < 0) { // if the luck falls below zero, character is dead
                element[1].isAlive = false;
            }
        } else if (!element[0].isAlive && element[1].isAlive) { // if the hero is not alive, but the villain is, automatic win for villain
            score.villians++; // add a win for the capitol/villains

            element[1].luck++; // increase the villain's luck
            if (element[1].luck > 10) { // winner's luck cannot be above 10
                element[1].luck = 10;
            }

            element[0].luck--; // decrease the hero's luck
            if (element[0].luck < 0) { // if the luck falls below zero, character is dead
                element[0].isAlive = false;
            }
        }
    });

    return score;
}

// display the results of our matches in the console
function conclusion(theHeroes, theVillians, currentHeroScore, currentVillianScore) {
    var score = runMatches(theHeroes, theVillians, currentHeroScore, currentVillianScore);
    console.log('Heroes at conclusion', score.heroes);
    console.log('Villains at conclusion', score.villians);

    if (score.villians > score.heroes) {
        console.log('Not really the ending we were hoping for');
    } else {
        console.log('We did it!');
    }
}

function randomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
