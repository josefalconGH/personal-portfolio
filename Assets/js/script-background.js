document.addEventListener('DOMContentLoaded', () => {

    // interBubble is necessary to select the interactive class from the HTML file
    const interBubble = document.querySelector('.interactive');

    // variables are necessary to store the current position of the mouse and the target position of the mouse
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // move function allows for the bubble to move towards the mouse target position
    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    // window.addEventListener allows for the target position of the mouse to be updated when the mouse is moved
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    // call to move function
    move();
});