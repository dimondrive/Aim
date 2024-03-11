const screens = document.querySelectorAll('.screen');
const screen__start = document.querySelector('.screen__start');
const timeList = document.querySelector('.time-list')


let time = 0;


screen__start.addEventListener('click',(event)=>{
    screens[0].classList.add('up');
})

timeList.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.classList.contains('time-btn')){
        console.log(e.target);
        time = parseInt(e.target.getAttribute('data-timer'));

        startGame();
    }
})
function startGame(){
    screens[1].classList.add('up');
}