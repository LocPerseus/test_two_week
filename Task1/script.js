let n, m, data;

function createGrid(data) {
    const containerGrid = document.querySelector('.container-grid');


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.classList.add('item');
            div.dataset.cell = `${i} ${j}`;
            console.log(div);
            container.appendChild(div);
        }
    }
    document.documentElement.style.setProperty(
        "--col",
        n
    );
}

function tick() {
    let item = document.querySelectorAll('.item');
    item.forEach((el, i, p) => {
        el.addEventListener('click', function(e) {
            if (e.target.innerText == "") {
                e.target.innerText = document.tick;
                switchTick();
                if (p[0].textContent == 'X' && p[1].textContent == 'X') {
                    console.log("win");
                }
            } else {
                alert("Ô đã được tick");
            }
        })
    })
}

function switchTick() {
    if (document.tick == "X") {
        document.tick = "O";
    } else {
        document.tick = "X";
    }
}
let row = [];
let col = [];


function checkWin(m) {
    let count = 0;
    this.checkCheo = function() {
        // i và j cùng tăng 1 đơn vị

    }
    this.checkNgang = function() {
        // i ko đổi j tăng 1 đơn vị
    }
    this.checkDoc = function() {
        // i tăng 1 đơn vị j không đổi
    }
    if (count == m) {

    }
}
const inputN = document.getElementById('n');
const inputM = document.getElementById('m');

function startGame() {
    document.tick = "X";
    n = inputN.value;
    m = inputM.value;

    createGrid(n);
    tick();
}

function resetGame() {
    document.location.reload();
}
const buttonStart = document.querySelector('.start');
buttonStart.addEventListener('click', startGame);
const buttonReset = document.querySelector('.reset');
buttonReset.addEventListener('click', resetGame);