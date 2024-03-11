const screens = document.querySelectorAll('.screen');
const screen__start = document.querySelector('.screen__start');
const timeList = document.querySelector('.time-list')
const resultTime = document.querySelector('.result');
const times = document.querySelector('.time');
const board = document.querySelector('.board');

let count = 0;
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

board.addEventListener('click',(e)=>{
    if(e.target.classList.contains('circle')){
        e.target.remove();
        count++;
        createRandomCircle();
    }
})

function startGame(){
    screens[1].classList.add('up');
    setInterval(startTimer,1000);
    times.innerHTML=`00:${time}`;
    createRandomCircle();
}

function startTimer(){
    if(time==0){
        resultTime.innerHTML=`Время вышло...`;
        finishGame();
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

function createRandomCircle(){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const {width,height} = board.getBoundingClientRect();
    const x =getRandomNumber(0,width-15);
    const y =getRandomNumber(0,height-15);
    circle.style.top=`${y}px`;
    circle.style.left=`${x}px`;
    board.append(circle);
}
function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function finishGame(){
    board.innerHTML=`<h1>Ваш счет: <span class='primary'>${count}</span></h1>`
}