// stat the timer
const startTimer = document.querySelector('.btn-success');
// stop the timer
const stopTimer = document.querySelector('.btn-danger');
// reset the timer
const resetTimer = document.querySelector('.btn-block');

//minutes
const minutes = document.querySelector('.minutes') 
//seconds
const seconds = document.querySelector('.seconds')



const time = new Date();

startTimer.addEventListener('click', startTime)
function startTime(){
    alert('hi');
}

