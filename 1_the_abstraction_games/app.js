// Practice abstraction.
// https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)

/**
 * 1. Create a Person constructor with the following object properties:
 * firstName
 * lastName
 * district
 * weapon
 * luck
 * matches
 * wins
 */

function Person(firstName, lastName, district, weapon, luck, matches, wins) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.district = district;
    this.weapon = weapon;
    this.luck = luck;
    this.matches = matches;
    this.wins = wins;
}
/**
 * 2. Create person objects for Katniss, Rue, Peeta, and Gale with the
 * following values:
 * Katniss, Everdeen, 12, bow and arrow, 10, 0, 0
 * Peeta, Mellark, 12, camoflague, 5, 0, 0
 * Rue, null, 11, slingshot, 4, 0, 0
 * Thresh, null, 11, rock, 3, 0, 0
 */

var katniss = new Person("Katniss", "Everdeen", 12, "bow and arrow", 10, 0, 0);
var peeta = new Person("Peeta", "Mellark", 12, "camoflague", 5, 0, 0);
var rue = new Person("Rue", null, 11, "slingshot", 4, 0, 0);
var thresh = new Person("Thresh", null, 11, "rock", 3, 0, 0);

// katniss

// peeta

// rue

// thresh

/**
 * 3. Create 4 arrays that represent matches between two characters.
 * For example, you might have an array named match1 where the first index
 * of the array is the Katniss object and the second index is the Thresh object.
 */


// match1
var match1 = [katniss, thresh];
// match2
var match2 = [rue, peeta];
// match3
var match3 = [peeta, thresh];
// match4
var match4 = [katniss, rue];
/**
 * 4. Create an array, named matches. It will contain all the matches you
 * created above.
 */
var matches = [match1, match2, match3, match4];
/**
 * 5. Create a function, named winner, that takes a single person object as
 * a parameter. The function will
 * - increment the winner's luck score by 1
 * - increment the winner's wins property by 1
 * BUT, the max luck score is 10.
 */
console.log(katniss);
console.log(peeta);
console.log(rue);
console.log(thresh);

function winner(person) {
    var personWin = person;
    console.log("personWin", personWin);
    personWin.luck++;
    personWin.win++;
    if (personWin.luck == 11) {
        personWin.luck = 10;
    }
    return personWin;
}

/**
 * 6. Create a function, named battle, that takes a single match array as a
 * parameter.
 * The function will
 * - increment the matches property of each object
 * - return the winner of the match
 * The winner is the person with the highest luck score.
 */

function battle(match) {

    var currentMatch = match;
    console.log(currentMatch);
    currentMatch.forEach(function(person, i) {
        console.log("currMatches", currentMatch[i].matches);
        currentMatch[i].matches++;
        console.log("currMatches", currentMatch[i].matches);
    });

    if (currentMatch[0].luck > currentMatch[1].luck) {
        currentMatch[0] = winner(currentMatch[0]);
    }
    if (currentMatch[1].luck > currentMatch[0].luck) {
        currentMatch[1] = winner(currentMatch[1]);
    }
    if (currentMatch[0].luck == currentMatch[1].luck) {
        currentMatch[0] = winner(currentMatch[0]);
        currentMatch[1] = winner(currentMatch[1]);
    }
    console.log("MATCH END:", currentMatch);
    return currentMatch;

}

/**
 * 7. Create a function, named runAllBattles, that takes an array of matches
 * as a parameter.
 * For each match array, invoke the battle function.
 * Pass the result of the battle function to the winner function.
 * Console log each person object after all battles have been completed.
 */
function runAllBattles(matchArray) {
    var allBattles = matchArray;
    allBattles.forEach(function(theMatch, i) {

        allBattles[i] = battle(allBattles[i]);
    });
    // console.log(matchArray);
    return (allBattles);
}

matches = runAllBattles(matches);
console.log(matches);

/**
 * 8. Invoke the battle function with one of the matches you created above.
 * Pass the result of the battle function to the winner function.
 * Console log each person object.
 */
// console.log(matches);
battle(match1);
console.log(match1);
console.log(katniss);
console.log(peeta);
console.log(rue);
console.log(thresh);
/**
 * TAKEAWAYS
 * When we abstract our logic into functions, we can perform those functions
 * on one or more objects or arrays. This gives us more flexibility and
 * allows us to not repeat the same code in multiple places (DRY).
 */
