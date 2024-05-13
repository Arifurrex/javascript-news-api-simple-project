## site link https://background-color-change-js-arifur.netlify.app/

![Screenshot 2024-05-13 113210](https://github.com/Arifurrex/javascript-simple-project-2024/assets/48369328/f7da05af-3019-4737-8ca5-63fe9c9b48a3)




```markdown
### Overview:
This JavaScript code generates a random hexadecimal color code and sets it as the background color of the webpage when a button is clicked. It's a simple demonstration of how to manipulate the DOM (Document Object Model) using JavaScript.

### JavaScript Code Breakdown:

```javascript
const button = document.getElementById("color-button");
const currentColor = document.getElementById('current-color');

const hexValues = ['0','1','2','4','5','6','7','8','9','a','b','c','d','e','f'];
```

1. **Variable Declarations**: 
   - `button`: Stores the reference to the HTML button element with the id "color-button".
   - `currentColor`: Stores the reference to the HTML element with the id "current-color".
   - `hexValues`: An array containing the possible characters in a hexadecimal color code.

```javascript
function arrayValue(){
    const randomPosition = Math.floor(Math.random()*hexValues.length);
    const arrayValue = hexValues[randomPosition];
    return arrayValue;
}
```

2. **`arrayValue()` Function**: 
   - Selects a random position within the `hexValues` array using `Math.random()` and `Math.floor()`.
   - Retrieves the character at that position from `hexValues` and returns it.

```javascript
function string(length){
    let string = "";
    for(i=0;i<length;i++){
        string += arrayValue();
    }
    return string;
}
```

3. **`string(length)` Function**: 
   - Generates a random hexadecimal color code of the specified length by repeatedly calling `arrayValue()` and concatenating the characters.
   - Takes a `length` parameter indicating the desired length of the hexadecimal color code.

```javascript
button.addEventListener('click',function(){
    const makeHexColor = '#' + string(6);
    document.body.style.setProperty(
        'background-color',makeHexColor
    );
    currentColor.textContent=makeHexColor;
})
```

4. **Event Listener**: 
   - An event listener is added to the `button` element, listening for a 'click' event.
   - When the button is clicked, it executes the provided function.
   - Inside the function:
      - A random hexadecimal color code of length 6 is generated using `string(6)`.
      - The background color of the webpage (`document.body`) is set to the generated color using `document.body.style.setProperty('background-color', makeHexColor)`.
      - The current color code is displayed on the webpage inside the `currentColor` element using `currentColor.textContent = makeHexColor`.
```