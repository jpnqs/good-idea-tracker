
var hashedName = location.hash.substring(1);

document.getElementById('name').innerText = atob(hashedName);

var number = 5_678_482;

add();

function add() {
    
    number += rand(0, 2);

    document.getElementById('num').innerText = number.toLocaleString('EN');

    setTimeout(() => {
        add();
    }, rand(500, 3000));

}

function rand(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
