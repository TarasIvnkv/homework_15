const movingBlock = document.querySelector(`#block`);

movingBlock.style.top = 0;
movingBlock.style.left = 0;

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

function getRandomIntInclusive(min = 0, max = 255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomColor = () => {
    let first = getRandomIntInclusive();
    let sec = getRandomIntInclusive();
    let third = getRandomIntInclusive();

    return `rgb(${first}, ${sec}, ${third})`
}

const colorInterval = setInterval(() => {
    movingBlock.style.background = randomColor();
}, 500)


const maxBlockTop = bodyHeight - movingBlock.clientHeight;
const maxBlockLeft = bodyWidth - movingBlock.clientWidth;

const moveBlock = () => {
    const top = Math.random() * maxBlockTop;
    const left = Math.random() * maxBlockLeft;

    movingBlock.style.top = top + `px`;
    movingBlock.style.left = left + `px`;
}

const movingInterval = setInterval(() => {
    moveBlock();
},500)



