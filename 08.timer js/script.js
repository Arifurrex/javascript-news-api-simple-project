const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');

const button = document.getElementById('startTimer');

const displayHours = document.getElementById('hoursOutput');
const displayMinutes = document.getElementById('minutesOutput');
const displaySecond = document.getElementById('secondsOutput');

button.addEventListener('click',function(){
  const futureHours =parseInt(hoursInput.value);  
  const futureMinutes =parseInt(minutesInput.value);
  const futureSeconds =parseInt(secondsInput.value);
  

  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  date.setHours(currentHours + futureHours);
  date.setMinutes(currentMinutes + futureMinutes);
  date.setSeconds(currentSeconds + futureSeconds);

  targetTime = date.getTime();
  localStorage.setItem('targetTime', targetTime);
  updateTimer();
  timerInterval = setInterval(updateTimer, 500);
    
})


const updateTimer = ()=>{
  if(targetTime){
  const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000; // convert milisecond to second devide by 1000

  if (differenceInSeconds < 1) {
    clearInterval(timerInterval);
}

        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor(differenceInSeconds / 60) % 60;
        const seconds = Math.floor(differenceInSeconds % 60);

        displayHours.textContent = `${hours} hours`;
        displayMinutes.textContent = `${minutes} minutes`;
        displaySecond.textContent = `${seconds} seconds`;
  }
}
const storedTargetTime = localStorage.getItem('targetTime');

if (storedTargetTime) {
    targetTime = storedTargetTime;
    updateTimer();
    timerInterval = setInterval(updateTimer, 500);
}