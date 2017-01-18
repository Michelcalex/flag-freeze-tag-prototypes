
let Player = require('./player'); //importing the module player
let Team = require('./team'); //importing the module team
let game1 = require('./game1');
// let game2 = require('./game2');
// let game3 = require('./game3');

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');


    game1.game1();

});