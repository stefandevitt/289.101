/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/


var puck_x = 210;
var puck_y = 210;

var speed = 40;
var puck =document.getElementById ('puck');

function logCoordinates(){
console.log('x='+puck_x + 'y=' + puck);
}

function checkCollision(){
if (puck_x > 250 && puck_x < 350 && puck_y >= 150 && puck_y < 250){
gap.style.backgroundColor = 'red';


}
    else{
    gap.style.backgroundColor = 'white'
    }
}

function teleport right(){
if (puck_x > 590;){
if puck_x = 0;
puck.style.left = puck_x + 'px';
}
}

puck.style.left = puck_x + 'px';
puck.style.top = puck_y + 'px';


document.getElementById('puck').style.left = puck_x + 'px';
document.getElementById('puck').style.top = puck_y + 'px';

//move left
document.getElementById('left').addEventListener ('click', function(){
puck_x -= speed;
document.getElementById ('puck').style.left = puck_x + 'px';  
logCoordinates();
checkCollision();
});

//move right
document.getElementById('right').addEventListener ('click', function(){
puck_x += speed;
document.getElementById ('puck').style.left = puck_x + 'px';    
logCoordinates();
checkCollision();
teleportRight();   
});

//move up
document.getElementById('up').addEventListener ('click', function(){
puck_y -= speed;
document.getElementById ('puck').style.top = puck_y + 'px';  
logCoordinates();
checkCollision();
});

//move down
document.getElementById('down').addEventListener ('click', function(){
puck_y += speed;
document.getElementById ('puck').style.top = puck_y + 'px';
logCoordinates()
checkCollision();
});

