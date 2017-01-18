
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