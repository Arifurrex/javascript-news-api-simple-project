## link https://coutnter-js-arifur.netlify.app/ 

![Screenshot 2024-05-13 114936](https://github.com/Arifurrex/javascript-simple-project-2024/assets/48369328/388e227a-9e07-419c-aa5f-c449b6379799)


## JavaScript Code Explanation:

```markdown


```javascript
const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');
const display = document.querySelector(".display");
let sum = 0;
```

1. **Variable Declarations**: 
   - `incrementButton`: Stores the reference to the HTML button element with the id "button-increment", used for incrementing the counter.
   - `decrementButton`: Stores the reference to the HTML button element with the id "button-decrement", used for decrementing the counter.
   - `display`: Stores the reference to the HTML element with the class "display", where the counter value is shown.
   - `sum`: Initializes a variable `sum` to keep track of the current counter value.

```javascript
incrementButton.addEventListener("click", function() {
    sum += 1;
    console.log(sum)
    if(sum < 20){
        display.textContent = sum;
        this.style.backgroundColor = `rgba(${sum * 24},255,${255/sum},0.5)`;
    } else {
        display.textContent = "stop";
        sum = 20; // Ensures the counter does not exceed 20
    }
})
```

2. **Event Listener for Increment Button**: 
   - An event listener is added to the `incrementButton`, listening for a 'click' event.
   - When the button is clicked, the `sum` is incremented by 1.
   - If the `sum` is less than 20:
      - The current counter value is displayed in the `display` element.
      - The background color of the `incrementButton` is dynamically set based on the `sum` value using RGBA color.
   - If the `sum` reaches 20, it stops incrementing and displays "stop".

```javascript
decrementButton.addEventListener("click", function() {
    sum -= 1;
    console.log(sum)
    if(sum > 0){
        display.textContent = sum;
        this.style.backgroundColor = `rgba(${sum * 24},255,${255/sum},0.5)`;
    } else {
        display.textContent = "stop";
        sum = 0; // Ensures the counter does not go below 0
    }
})
```

3. **Event Listener for Decrement Button**: 
   - An event listener is added to the `decrementButton`, listening for a 'click' event.
   - When the button is clicked, the `sum` is decremented by 1.
   - If the `sum` is greater than 0:
      - The current counter value is displayed in the `display` element.
      - The background color of the `decrementButton` is dynamically set based on the `sum` value using RGBA color.
   - If the `sum` reaches 0, it stops decrementing and displays "stop".
```
```

