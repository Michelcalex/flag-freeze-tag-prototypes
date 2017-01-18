
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