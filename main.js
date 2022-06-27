const mainContainer = document.querySelector('.container')
const leftSide = document.querySelector('.left-color')
const rightSide = document.querySelector('.right-color')
const buttonUp = document.querySelector('.button-up')
const buttonDown = document.querySelector('.button-down')
const count = rightSide.querySelectorAll('div').length;

let rounder = 0;
const newValue = mainContainer.clientHeight;

buttonUp.addEventListener('click', function(u){
    rounder++;
    if(rounder > count - 1){
        rounder=0;
    }
    const back = newValue * rounder;
    console.log(back);
    leftSide.style.transform = `translateY(-${back}px)`
    rightSide.style.transform = `translateY(-${back}px)`

});


buttonDown.addEventListener('click', function(){
    if (rounder === 0) {
        rounder = count - 1;     
    }
    else{
        rounder--;
    }
    const back = newValue * rounder;
    console.log(back);
    leftSide.style.transform = `translateY(-${back}px)`
    rightSide.style.transform = `translateY(-${back}px)`
});

