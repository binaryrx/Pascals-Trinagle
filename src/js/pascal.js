console.log("Pascal");

const PascalEl = document.getElementById("Pascal");
const PascalResultEl = PascalEl.querySelector("#Pascal-result");
const createBtn = PascalEl.querySelector("#Pascal-create");
const startInput = PascalEl.querySelector("#Pascal-start");
const rowsInput = PascalEl.querySelector("#Pascal-rows");

let prevArr = [1];
let currArr = [1, 1];
let start = 1;
let rows = 3;

const createRows = () => {
    for (let i = 0; i < currArr.length; i += 1) {
        if (i === 0 || i === currArr.length - 1) {
            currArr[i] = start;
        } else {
            currArr[i] = prevArr[i - 1] + prevArr[i];
        }
        const span = document.createElement("span");
        span.classList.add("cell");
        if (currArr[i] % 2 !== 0) {
            span.classList.add("odd");
        }

        span.textContent = currArr[i] + " ";
        PascalResultEl.appendChild(span);
        // PascalEl.appendChild(document.createTextNode(currArr[i] + " "));
    }
    PascalResultEl.appendChild(document.createElement("br"));
};

const resizeCells = () => {
    const { width: pascalResultWidth } = getComputedStyle(PascalResultEl);

    const maxWidth = window.innerWidth * 0.5; // 75% of the screen

    console.log(pascalResultWidth, maxWidth);

    if (parseFloat(pascalResultWidth) > maxWidth) {
        console.log("hiii");
        // PascalEl.style.fontSize = '75%';
    }
};

const Pascal = () => {
    prevArr = [start];
    currArr = [start, start];

    for (let i = 0; i <= rows; i += 1) {
        if (rows > 2) {
            prevArr = currArr;
            currArr = new Array(i);
            createRows();
            resizeCells();
        } else if (rows < 2) {
            PascalResultEl.textContent = "A triangle needs at least 2 rows!";
        } else {
            PascalResultEl.innerHTML = prevArr + "</br>" + currArr[0] + " " + currArr[1];
        }
    }
};

createBtn.addEventListener("click", () => {
    start = parseInt(startInput.value, 10);
    rows = parseInt(rowsInput.value, 10);
    PascalResultEl.innerHTML = "";
    Pascal();
});
