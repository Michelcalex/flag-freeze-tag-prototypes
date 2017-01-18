
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