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