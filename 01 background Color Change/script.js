const button = document.getElementById("color-button");
const currentColor = document.getElementById('current-color');

const hexValues = ['0','1','2','4','5','6','7','8','9','a','b','c','d','e','f'];

function arrayValue(){
    const randomPosition = Math.floor(Math.random()*hexValues.length);

    const arrayValue = hexValues[randomPosition];
    console.log(randomPosition)
    console.log(hexValues[randomPosition])
    return arrayValue;
    
}

// arrayValue()
function string(length){
    let string = "";
    for(i=0;i<length;i++){
        string += arrayValue();
    }
    console.log(string)
    return string;
}


button.addEventListener('click',function(){
    const makeHexColor = '#' + string(6);
    document.body.style.setProperty(
        'background-color',makeHexColor
    );
    // currentColor.innerHTML=makeHexColor;
    currentColor.textContent=makeHexColor;

})