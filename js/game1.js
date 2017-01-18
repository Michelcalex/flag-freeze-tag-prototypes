
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