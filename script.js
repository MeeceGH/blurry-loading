const loaderText = document.getElementById('loading-text');
const background = document.getElementById('container');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load >= 100) {
        load = 100;
        clearInterval(int);
    }

    loaderText.textContent = load + '%';
    loaderText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

