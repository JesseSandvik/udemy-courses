/**
 * Write a function called "twoFer" that accepts a person's name
 * It should return a string in the format "one for <name>, one for me"
 * If no name is provided, it should default to "you"
 * 
 * twoFer() => "One for you, one for me"
 * twoFer("Elton") => "One for Elton, one for me"
 */

function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me.`;
}

console.log(twoFer());
console.log(twoFer("Brandon"));

/**
 * Write a isLeapYear() function that accepts a year and returns true / false
 * depending on if the year is a leap year.
 * 
 * To determine whether a year is a leapyear, use this "formula":
 *  A year is a leapyear if
 *      - year is a multiple of 4 and not a multiple of 100
 * or
 *      - year is a multiple of 400
 */

// const isLeapYear = (year: number): boolean => {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     }
//     return false;
// }

const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2004));
console.log(isLeapYear(1997));