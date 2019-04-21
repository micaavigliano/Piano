const buttons = document.querySelectorAll('button');
console.log(buttons)

buttons.forEach(btn => btn.addEventListener('click', playSound))

function playSound(event) {
    const button = event.target;
    console.log(button);
    const note = button.dataset.note;
    console.log(note);

    const audio = document.getElementById(`audio${note}`);
    console.log(audio);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', event => {
    const key = event.key;
    const btn = document.querySelector(`button[data-key="${key}"]`)
    if (btn){
        btn.click() //trigger
    }
})