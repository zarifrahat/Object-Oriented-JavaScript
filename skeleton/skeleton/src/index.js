import FlappyBird from './game';


const canvasCtx = document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.getElementById('bird-game');
new FlappyBird(canvas);
}

module.exports = { canvasCtx };