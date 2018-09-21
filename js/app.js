// Enemies our player must avoid
let points =1;

//sve za rock
const Rock = function () {
    this.sprite = 'images/Rock.png';
    this.x = x;
    this.y = y;
};

Rock.prototype.update = function() {

};

Rock.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//sve za star

const Star = function (x= 200, y=100) {
    this.sprite = 'images/Star.png'
    this.x = x;
    this.y = y;
};

Star.prototype.update = function () {
    if ( player.x < this.x + 55 &&
        player.x + 40 > this.x &&
        player.y < this.y + 35 &&
        40 + player.y > this.y)
        this.x = 50000;
};

Star.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);

};

//ENEMYYYY
var Enemy = function(x = 10, y = 20) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.direction = 'right';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // console.log('dt', dt);

    if (this.x < 400) {
        this.x = this.x + 2;
        if (this.x === 400) {
            this.x = -100
        }
    }

    if (
        player.x < this.x + 55 &&
        player.x + 40 > this.x &&
        player.y < this.y + 35 &&
        40 + player.y > this.y
    )

    {
        alert('You have '+(points - 1)+' points!')
        points = 1
        player.x = 200;
        player.y = 400;

    };

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
    new Enemy(100, 230),
    new Enemy(0, 150),
    new Enemy(100,65),
    new Enemy(370, 65),
    new Enemy(0,300)
];

var allRock = [
    new Rock(x=300,y=130),
    new Rock(x=100,y=300)
];

var allStar  = [
    new Star(x= 200, y=230),
    new Star(X= 400, Y=50)
];

//playaaa


const Player = function (x= 200, y=400) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y= y;

};


Player.prototype.update = function()  {
    if(this.y <= 30) {
        this.y = 400;
        this.x = 200;
        document.querySelector('.points').innerHTML = points;
        points++
    }

    if(this.x < 0) {
        this.x = 0
    }

    if(this.x > 400) {
        this.x = 400
    }

    if(this.y > 400) {
        this.y = 400
    }
};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function (arrows) {

    switch (arrows) {
        case 'up' :

            console.log(this.y - 90);
            this.y = this.y -  90 ;

            break;

        case 'down' :
            this.y = this.y + 90;
            break;
        case 'right' :
            this.x = this.x + 100;
            break;


        case 'left' :
            this.x = this.x - 100;
            break;

    }

};

const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
