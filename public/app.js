(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let Player = require('./player'); //importing the module player
let Team = require('./team'); //importing the module team
/*let game1 = require('./game1');
let game2 = require('./game2');
let game3 = require('./game3');*/

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');

    // Player.Player();
    // Team.Team();
    // game1.game1();
    // game2.game2();
    // game3.game3();
    

    
    //teamNames.teamNames();

    // console.log(player.playerdudes[1].tag()); //tag you are it
    // console.log(player.playerdudes);
    // console.log(team.teamNames);


    //-------------------------------------

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
},{"./player":2,"./team":3}],2:[function(require,module,exports){
console.log('players are here');


function Player(name) {  //Constructor - player is being constructed. 
    this.name = name;  //this refers to the player - the object that the function was called on. 
    this.playersTeam;
    this.isFrozen = false;
    this.hasFlag = false;
    

    
    this.tag = function(playertag) {
        if(this.playersTeam === 'chasers' && playertag.team === 'runners') {
            console.log(this.name + ' froze ' + playertag.name);
            playertag.isFrozen === true;
        }

        if(this.playersTeam === 'runners' && playertag.team === 'runners' && this.isFrozen === false) {
            console.log(this.name + ' un-froze' + playertag.name);
            playertag.isFrozen === true;
        }
    };

    return this;
};


module.exports = {
    Player: Player,
};
},{}],3:[function(require,module,exports){
console.log('teams are here');


function Team(teamname) { //Constructor - team is being constructed. 
    this.teamname = teamname; //this refers to the team -  the object that the function was called on
    this.teamPlayers = [];

    
    this.add = function(playertoadd) {
        this.teamPlayers.push(playertoadd);
        playertoadd.playersTeam = this.teamname; //this takes care of the previous set.team property I had under players.js
    }, 
    this.won = function(otherTeam) {

        //ORIGINAL WAYS: 
        //-------------#1:
        /*if (this.teamname === 'Chasers') {
            let won = false;
            otherTeam.players.forEach(function(dude) {
                if (dude.frozen() === false) {
                    won = false;
                }
            });
            return won;
        }*/

        //-------------#2:
        /*if (this.teamname === 'Chasers') {
            let won = otherTeam.players.every(function(dude) {
                return dude.frozen();
            });
            return won;
        }*/

        if (this.teamname === 'chasers') {
            return otherTeam.teamPlayers.every(function(dude) {  //'every' means that dude.frozen() has to be true for ALL the teamPlayers
                return dude.frozen();
            });
        }


        //ORIGINAL WAYS: 
        //-------------#1:
        /*if (this.teamname === 'runners') {
            this.players.forEach(function(dude) {
                if (dude.getFlag()) {
                    return true;
                }
            });
            return false;
        }*/

        if (this.teamname === 'Runners') {
            return this.players.some(function(dude) {  //'some' returns true if any dude.getFlag() = true
                return dude.hasFlag();
            });
        }
    }

    return this;
} 


module.exports = {
    Team: Team,
};
},{}]},{},[1]);
