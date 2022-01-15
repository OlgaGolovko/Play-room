//   <!--Анимация пчелы-->

// <!--функция для рисования заполненных и обведенных кпугов-->
let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};


let theEndGame = function(distance) {
    if (distance < 10) {
        alert(" Поздравляем! Вы поймали снитч и выиграли.");
    };
}



// let target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(height)
// };
// <!--Функция для рисования пчелы-->

var drawSnitch = function(x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Grey";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    // circle(x - 5, y - 11, 5, false);
    // circle(x + 5, y - 11, 5, false);
    // circle(x - 2, y - 1, 2, false);
    // circle(x + 2, y - 1, 2, false);

    ctx.beginPath();
    ctx.moveTo(x - 5, y - 5);
    ctx.lineTo(x - 6, y - 6);

    ctx.moveTo(x - 6, y - 6);
    ctx.lineTo(x - 7, y - 7);

    ctx.moveTo(x - 7, y - 7);
    ctx.lineTo(x - 10, y - 8);

    ctx.moveTo(x - 9, y - 7);
    ctx.lineTo(x - 17, y - 7);

    // ctx.moveTo(x - 16, y - 7);
    // ctx.lineTo(x - 19, y - 8);

    // ctx.moveTo(x - 19, y - 8);
    // ctx.lineTo(x - 20, y - 7);

    // ctx.moveTo(x - 20, y - 7);
    // ctx.lineTo(x - 19, y - 6);

    // ctx.moveTo(x - 19, y - 6);
    // ctx.lineTo(x - 18, y - 5);

    // ctx.moveTo(x - 18, y - 5);
    // ctx.lineTo(x - 16, y - 4);

    // ctx.moveTo(x - 16, y - 4);
    // ctx.lineTo(x - 15, y - 3);

    // ctx.moveTo(x - 18, y - 5);
    // ctx.lineTo(x - 16, y - 4);
    ctx.stroke();


};
// <!--Функция для изменения позиции пчелы-->
let update = function(coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > width) {
        coordinate = width;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }

    return coordinate;
};

//    <!--Анимируем пчелу	-->

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let viewportWidth = document.body.clientWidth;
let viewportHeight = document.body.clientHeight;

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let x = viewportWidth / 2;
let y = viewportHeight / 2;

let speed = 30;

setInterval(function() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawSnitch(x, y);
    x = update(x);
    y = update(y);

    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}, speed);

$("#canvas").click(function(event) {

})