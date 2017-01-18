
let Player = require('./player'); //importing the module player
let Team = require('./team'); //importing the module team
/*let game1 = require('./game1');
let game2 = require('./game2');
let game3 = require('./game3');*/

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');

    let chaserMembers = ['Parker', 'Christian', 'Ryan', 'Emily'];
    let runnerMembers = ['Cameron', 'Anna', 'Dennis', 'Hayley'];

    let c = new Team.Team ('chasers');
    let r = new Team.Team ('runners');

    chaserMembers.forEach(function(playerName) {
        let newMember = new Player.Player (playerName);
        c.add(newMember);
        console.log(playerName);
    });

    runnerMembers.forEach(function(playerName) {
        let newMember = new Player.Player (playerName);
        r.add(newMember);
        console.log(playerName);
    });
});