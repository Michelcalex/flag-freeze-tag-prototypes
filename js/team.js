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