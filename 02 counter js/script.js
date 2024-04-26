const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');
const display = document.querySelector(".display");
let sum = 0;
incrementButton.addEventListener("click", function() {
    // this.style.backgroundColor = "red";

    sum += 1;
    console.log(sum)
    if(sum<20){
        display.textContent=sum;
        this.style.backgroundColor = `rgba(${sum * 24},255,${255/sum},0.5)`;
        console.log(`rgba(${255/sum},255,${255/sum},0.5)`)
    }else{
        display.textContent ="stop"
        sum = 20;
    }

})
decrementButton.addEventListener("click", function() {
    

    sum -= 1;
    console.log(sum)
    if(sum>0){
        display.textContent=sum;
        this.style.backgroundColor = `rgba(${sum * 24},255,${255/sum},0.5)`;
        console.log(`rgba(${255/sum},255,${255/sum},0.5)`)
        
    }else{
        display.textContent="stop";
        sum = 0;
    }

})


