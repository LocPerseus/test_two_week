const containerGrid = document.querySelector('.container-grid');
const inputN = document.getElementById('n');
const inputM = document.getElementById('m');

let data, topOfheader;

function createGrid(data) {
    console.log(containerGrid);
    containerGrid.innerHTML = "";
    let header = document.createElement('div');
    header.classList.add("header");
    for (let i in data[0]) {
        let ele = document.createElement('div');
        // console.log(ele);
        ele.innerHTML = i;
        header.appendChild(ele);
    }
    containerGrid.appendChild(header);
    for (let i in data) {
        let row = document.createElement("div");
        row.classList.add(`col${i}`);
        for (let j in data[0]) {
            let ele = document.createElement("div");
            ele.innerHTML = data[i][j];
            row.appendChild(ele);
        }
        containerGrid.appendChild(row);
    }
    document.documentElement.style.setProperty(
        "--col",
        Object.keys(data[0]).length
    );
}

function random(n) {
    return Math.round(Math.random() * (n - 1));
}

function generateData(n, m) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        let row = {};
        for (let j = 1; j <= m; j++) {
            row[j] = random(1000);
        }
        temp.push(row);
    }
    return temp;
}

function showData() {
    const n = inputN.value;
    const m = inputM.value;
    console.log(n, m);
    data = generateData(n, m);
    console.log(data);
    createGrid(data);
    header = document.querySelector('.header');
    topOfheader = header.offsetTop;
    const colums = header.querySelectorAll('div');
    console.log(colums);
    colums.forEach(colums => colums.addEventListener("click", sortByColumn));
}

function sortByColumn(e) {
    console.log(this.innerHTML)
    const attribute = this.innerHTML;
    data.sort((a, b) => {
        return a[attribute] > b[attribute] ? 1 : -1;
    });
    createGrid(data);
    header = document.querySelector(".header");
    const colums = header.querySelectorAll("div");
    colums.forEach(colums => colums.addEventListener("click", sortByColumn));
    console.log(e);
}

function fixHeader() {
    if (window.scrollY >= topOfheader) {
        document.body.style.paddingTop = header.offsetHeight + "px";
        document.body.classList.add("fixed-header");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-header");
    }
}

const buttonShow = document.querySelector('.show');
buttonShow.addEventListener('click', showData);
window.addEventListener('scroll', fixHeader);