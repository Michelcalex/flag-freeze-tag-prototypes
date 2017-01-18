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