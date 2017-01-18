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