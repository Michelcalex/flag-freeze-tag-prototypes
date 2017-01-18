
// let player = require('./player'); //importing the module player
// let team = require('./team'); //importing the module team
let game1 = require('./game1');
let game2 = require('./game2');
let game3 = require('./game3');

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');

    // player.Player();
    // team.Team();
    game1.game1();
    game2.game2();
    game3.game3();
    

    
    //teamNames.teamNames();

    // console.log(player.playerdudes[1].tag()); //tag you are it
    // console.log(player.playerdudes);
    // console.log(team.teamNames);
});