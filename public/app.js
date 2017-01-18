(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{"./game1":2,"./game2":3,"./game3":4}],2:[function(require,module,exports){

let player = require('./player'); 
let team = require('./team'); 

function game1() {
    let a = new player.Player('Todd');
    let b = new player.Player('Barb');
    let c = new player.Player('Fitz');


    let s = new team.Team('runners');
    let t = new team.Team('chasers');

    s.add(a);
    s.add(b);
    t.add(c);

    s.won(); // false
    t.won(s); // false

    c.tag(a);
    s.won(); 
    t.won(s);
    a.frozen(); 
    s.won(); 
    t.won(s);
    b.tag(a);
    s.won(); 
    t.won(s);
    a.captureFlag();
    console.log(s.won()); 
    console.log(t.won(s));

}

module.exports = {
    game1: game1, 
};
},{"./player":5,"./team":6}],3:[function(require,module,exports){

let player = require('./player'); 
let team = require('./team'); 

function game2() {
    let a = new player.Player('Parker');
    let b = new player.Player('Christian');
    let c = new player.Player('Boone');


    let s = new team.Team('runners');
    let t = new team.Team('chasers');

    s.add(a);
    s.add(b);
    t.add(c);

    s.won(); // false
    t.won(s); // false

    c.tag(b);
    s.won(); 
    t.won(s);
    b.frozen(); 
    s.won(); 
    t.won(s);
    c.tag(a);
    a.frozen();
    console.log(s.won()); 
    console.log(t.won(s));

}

module.exports = {
    game2: game2, 
};
},{"./player":5,"./team":6}],4:[function(require,module,exports){

let player = require('./player'); 
let team = require('./team'); 

function game3() {
    let a = new player.Player('Parker');
    let b = new player.Player('Christian');
    let c = new player.Player('Boone');
    let d = new player.Player('Emily');
    let e = new player.Player('Anna');


    let s = new team.Team('runners');
    let t = new team.Team('chasers');

    s.add(a);
    s.add(b);
    s.add(c);
    t.add(d);
    t.add(e);

    s.won(); // false
    t.won(s); // false

    d.tag(b);
    s.won(); 
    t.won(s);
    b.frozen(); 
    s.won(); 
    t.won(s);
    e.tag(a);
    s.won(); 
    t.won(s);
    a.frozen();
    s.won(); 
    t.won(s);
    c.tag(a);
    s.won(); 
    t.won(s);
    a.frozen();
    s.won(); 
    t.won(s);
    b.captureFlag();
    s.won(); 
    t.won(s);
    console.log(s.won()); 
    console.log(t.won(s));

}

module.exports = {
    game3: game3, 
};
},{"./player":5,"./team":6}],5:[function(require,module,exports){
console.log('players are here');


function Player(name) {  //Constructor - player is being constructed. 
    this.name = 'name';  //this refers to the player - the object that the function was called on. 
    this.playersTeam;
    this.isFrozen = false;
    this.hasFlag = false;
    
    /*Example (let a = new Player('Todd')): 
    {
        name: 'Todd',
        playersTeam: this.playersTeam,
        isFrozen = false,
        hasFlag = false,
    }*/

    this.setTeam = function(teamparam) {
        this.playersTeam = teamparam;
    },
    this.tag = function(playertag) {
        playertag.isFrozen === false;
    },
    this.frozen = function() {
        return this.isFrozen;
    },
    this.captureFlag = function() {
        if (this.isFrozen === false) {
            this.hasFlag = true;
        }
    },
    this.getFlag = function() {
        return this.hasFlag;
    }

    return this;
}


module.exports = {
    Player: Player,
};
},{}],6:[function(require,module,exports){
console.log('teams are here');


function Team(teamname) { //Constructor - team is being constructed. 
    this.teamname = teamname; //this refers to the team -  the object that the function was called on
    this.players = [];

    /*Example (let r = new Team('runners')): 
    {
        teamname: 'runners',
        players: [],
    }*/
    
    this.add = function(playertoadd) {
        playertoadd.setTeam(this.teamname);
        this.players.push(playertoadd);
    }, 
    this.won = function(otherTeam) {
        /*if (this.teamname === 'Chasers') {
            let won = false;
            otherTeam.players.forEach(function(dude) {
                if (dude.frozen() === false) {
                    won = false;
                }
            });
            return won;
        }*/

        /*if (this.teamname === 'Chasers') {
            let won = otherTeam.players.every(function(dude) {
                return dude.frozen();
            });
            return won;
        }*/

        if (this.teamname === 'chasers') {
            return otherTeam.players.every(function(dude) {
                return dude.frozen();
            });
        }

        /*if (this.teamname === 'runners') {
            this.players.forEach(function(dude) {
                if (dude.getFlag()) {
                    return true;
                }
            });
            return false;
        }*/

        if (this.teamname === 'Runners') {
            return this.players.some(function(dude) {
                return dude.getFlag();
            });
        }
    }
} 

let teamNames = [
    new Team('chasers'),
    /*{
        teamname: 'Chasers',
        players: [],
        add: function() {},
        won: function() {},
    }*/
    new Team('runners'),
    /*{
        teamname: 'Runners',
        players: [
            {
                name: 'Parker',
                isFrozen: false,
                tag: function(player) {},
                frozen: function() {
                    return this.isFrozen;
                },
                getFlag: function() {}
            }
        ],
        add: function() {},
        won: function() {},
    }*/
]



module.exports = {
    Team: Team,
    teamNames: teamNames,
};
},{}]},{},[1]);
