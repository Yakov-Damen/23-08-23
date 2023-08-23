"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
// דגשים
// שחקן יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
// ENUM representing the player's choices
var Choice;
(function (Choice) {
    Choice["Rock"] = "rock";
    Choice["Paper"] = "paper";
    Choice["Scissors"] = "scissors";
    Choice["None"] = "none";
})(Choice || (Choice = {}));
// Function to determine the winner of the game
function determineWinner(player1, player2) {
    if (player1 === player2) {
        return 'tie';
    }
    switch (player1) {
        case Choice.Rock:
            return player2 === Choice.Scissors ? 'player1' : 'player2';
        case Choice.Paper:
            return player2 === Choice.Rock ? 'player1' : 'player2';
        case Choice.Scissors:
            return player2 === Choice.Paper ? 'player1' : 'player2';
        default:
            throw new Error('Invalid choice for player1');
    }
}
// Function to play the game and return the result
function playGame(player1, player2 = Choice.None) {
    if (player1 === Choice.None) {
        throw new Error('Player 1 must make a choice');
    }
    if (player2 === Choice.None) {
        throw new Error('Player 2 must make a choice');
    }
    return determineWinner(player1, player2);
}
// Example of playing the game
const player1 = Choice.Rock;
const player2 = Choice.Scissors;
try {
    const result = playGame(player1, player2);
    console.log(`Player 1 chose: ${player1}`);
    console.log(`Player 2 chose: ${player2}`);
    console.log(`The result is: ${result}`);
}
catch (error) {
    console.error(error);
}
const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie
