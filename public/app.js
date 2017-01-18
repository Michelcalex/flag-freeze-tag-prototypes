(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

let Player = require('./player'); //importing the module player
let Team = require('./team'); //importing the module team
let game1 = require('./game1');
// let game2 = require('./game2');
// let game3 = require('./game3');

window.addEventListener('load', function() { //when the page loads, run this function
    console.log('Ready to play');


    game1.game1();

});
},{"./game1":2,"./player":3,"./team":4}],2:[function(require,module,exports){

let Player = require('./player'); 
let Team = require('./team'); 

function game1() {
    let c = Team.chasers();
    let r = Team.runners();

    c.teamPlayers[0].tag(r.teamPlayers[0]); //freeze - parker tags cameron -->cameron is frozen
    console.log(c.won(r));
    console.log(r.won());
    c.teamPlayers[0].tag(r.teamPlayers[1]); //freeze - parker tags anna --> Anna is frozen
    console.log(c.won(r));
    console.log(r.won());
    r.teamPlayers[2].tag(r.teamPlayers[0]); //unfreeze -dennis tags cameron -> cameron is unfrozen
    console.log(c.won(r));
    console.log(r.won());
    r.teamPlayers[3].tag(c.teamPlayers[2]); //nothing -Hayley tags Ryan -->nothing
    console.log(c.won(r));
    console.log(r.won());
    c.teamPlayers[2].tag(r.teamPlayers[2]); //freeze - Ryan tags Dennis -> Dennis is frozen
    console.log(c.won(r));
    console.log(r.won());
    r.teamPlayers[3].tag(c.teamPlayers[1]); //nothing - Hayley tags Christian -->Nothing
    console.log(c.won(r));
    console.log(r.won());
    c.teamPlayers[0].tag(r.teamPlayers[3]); //freeze - parker tags Hayley --> Hayley is frozen
    console.log(c.won(r));
    console.log(r.won());
    c.teamPlayers[1].tag(r.teamPlayers[0]); //freeze - Christian tags Cameron --> Cameron is frozen
    console.log('hey' + c.won(r));
    console.log(r.won());
}

module.exports = {
    game1: game1, 
};
},{"./player":3,"./team":4}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
console.log('teams are here');
let Player = require('./player'); 

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
            for( let i =0; i < otherTeam.teamPlayers.length; i++) {
                if(otherTeam.teamPlayers[i].isFrozen === false) {
                    return false;
                }
            }
            
            return true;
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

        if (this.teamname === 'runners') {
            for(let i = 0; i < this.teamPlayers.length; i++) {
                if(this.teamPlayers[i].hasFlag === true) {
                    return true;
                }
            }

            return false;
        }
    };

    return this;
} 


function chasers() {
    let chaserMembers = ['Parker', 'Christian', 'Ryan', 'Emily'];

    let c = new Team ('chasers');

    chaserMembers.forEach(function(playerName) {
        let newMember = new Player.Player(playerName);
        c.add(newMember);
    });

    return c;
}

function runners() {
    let runnerMembers = ['Cameron', 'Anna', 'Dennis', 'Hayley'];

    let r = new Team ('runners');

    runnerMembers.forEach(function(playerName) {
        let newMember = new Player.Player(playerName);
        r.add(newMember);
    });

    return r;
}

module.exports = {
    Team: Team,
    chasers: chasers,
    runners: runners
};
},{"./player":3}]},{},[1]);
