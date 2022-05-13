// checkerboard model (модель шахматной доски)
let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

// drawing a model (отрисовка модели шахматной доски)
function draw() {
    let out = '';
    let m = 0;
    // First loop, draws horizontal lines (Первый цикл, рисует горизонтальные строки)
    for (let i = 0; i < chess.length; i++) {
        let arr = chess[i];
        // Second loop, draws inside the cell row (Второй цикл, рисует внутри строки ячейки)
        for (let k = 0; k < arr.length; k++) {
            if (m % 2 === 0) {
                out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
            } else {
                out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
            }
            m++;
        }
        m++;
    }
    document.querySelector('#field').innerHTML = out;
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.onclick = horse;
    });
}

draw();

function horse() {
    // Clean the field
    document.querySelectorAll('.chess-block').forEach(function (element) {
       element.classList.remove('green');
       element.classList.remove('active');

    });

    let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x + ' ' + y);
    // подсветка поля клика
    this.classList.add('green');
    // проверка хода коня
    // right
    if (+ x + 2 < 8 && + y + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${+ x + 2}"][data-y="${+ y + 1}"]`).classList.add('active');
    }
    if (+ x + 2 < 8 && + y - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${+ x + 2}"][data-y="${+ y - 1}"]`).classList.add('active');
    }
    // left
    if (+ x - 2 >= 0 && + y + 1 < 8) {
        document.querySelector(`.chess-block[data-x="${+ x - 2}"][data-y="${+ y + 1}"]`).classList.add('active');
    }
    if (+ x - 2 >= 0 && + y - 1 >= 0) {
        document.querySelector(`.chess-block[data-x="${+ x - 2}"][data-y="${+ y - 1}"]`).classList.add('active');
    }
    // up
    if (+ x + 1 < 8 && + y - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${+ x + 1}"][data-y="${+ y - 2}"]`).classList.add('active');
    }
    if (+ x - 1 >= 0 && + y - 2 >= 0) {
        document.querySelector(`.chess-block[data-x="${+ x - 1}"][data-y="${+ y - 2}"]`).classList.add('active');
    }
    // down
    if (+ x + 1 < 8 && + y + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${+ x + 1}"][data-y="${+ y + 2}"]`).classList.add('active');
    }
    if (+ x - 1 >= 0 && + y + 2 < 8) {
        document.querySelector(`.chess-block[data-x="${+ x - 1}"][data-y="${+ y + 2}"]`).classList.add('active');
    }
}