const screens = document.querySelectorAll('.screen');
const screen__start = document.querySelector('.screen__start');
const timeList = document.querySelector('.time-list')
const resultTime = document.querySelector('.result');
const times = document.querySelector('.time');

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
    setInterval(startTimer,1000);
    times.innerHTML=`00:${time}`;
}

function startTimer(){
    if(time==0){
        resultTime.innerHTML=`Время вышло...`
    }
    else{
        let current = --time;
        if(current<10){
            current=`0${current}`;
            console.log(time);
        }
        times.innerHTML=`00:${current}`;
    }
}