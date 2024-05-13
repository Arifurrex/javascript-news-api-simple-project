# link https://card-js-arifur.netlify.app/

![Screenshot 2024-05-13 122854](https://github.com/Arifurrex/javascript-simple-project-2024/assets/48369328/74fc024f-db6c-4773-bf36-a3ad647afe19)




### JavaScript Code Explanation:

```javascript
const allData = [
    // Array of objects containing data for each card
];
```

1. **Data Initialization**: 
   - `allData`: It's an array containing objects, where each object represents data for a card. Each object has properties like `name`, `img`, `text`, and `date`, representing the name, image source, text content, and date, respectively.

```javascript
const cards = document.querySelector('.cards');
```

2. **DOM Element Selection**: 
   - `cards`: It stores the reference to the HTML element with the class "cards". This is the container where the dynamically generated card elements will be added.

```javascript
const makeHtml = (data)=>{
    return (`<div class="card">
    <img src="${data.img}" alt="">
    <h2>${data.name}</h2>
    <p>${data.text}</p>
    <date>write on : ${data.date}</date>
</div>`);
}
```

3. **HTML Generation Function**: 
   - `makeHtml(data)`: This function takes a `data` object as input and generates HTML markup using template literals.
   - It creates a `<div>` element with the class "card".
   - Inside the `<div>` element, it includes an `<img>` element with the `src` attribute set to the `img` property of the `data` object.
   - It includes an `<h2>` element displaying the `name` property of the `data` object.
   - It includes a `<p>` element displaying the `text` property of the `data` object.
   - It includes a `<date>` element displaying the `date` property of the `data` object.

```javascript
cards.innerHTML = allData.map(x=>{
  let insideHtml = makeHtml(x);
  return insideHtml;
}).join(" ");
```

4. **Populating Container with HTML**: 
   - The `innerHTML` property of the `cards` element is set to the result of mapping over the `allData` array.
   - For each object `x` in `allData`, the `makeHtml` function is called to generate HTML markup.
   - The resulting HTML strings are collected into an array using `map()`.
   - Finally, the array of HTML strings is joined into a single string using `join(" ")` and assigned to the `innerHTML` property of the `cards`, effectively populating it with the dynamically generated HTML content.
```
```

You can use this Markdown format directly in your documentation. Let me know if you need further assistance!