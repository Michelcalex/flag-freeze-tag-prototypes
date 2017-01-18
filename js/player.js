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