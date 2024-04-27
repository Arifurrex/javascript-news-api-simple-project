const allData = [
  {
    
    name:"arifur Rahman 1",
    img:"image/profile-pic (1).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"24 october 2017"
  },
  {
    
    name:"abdur Rahman 2",
    img:"image/profile-pic (2).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  },   
  {
    
    name:"abdul alim 3",
    img:"image/profile-pic (3).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"abdus salam 4",
    img:"image/profile-pic (4).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"abdur razzak 5",
    img:"image/profile-pic (7).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"rohim uddin 6",
    img:"image/profile-pic (6).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 

   
]

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');


const cards = document.querySelector('.cards');

const makeHtml = (data)=>{
    return (`<div class="card">
    <img src="${data.img}" alt="">
    <h2>${data.name}</h2>
    <p>${data.text} </p>
    
    <date>write on : ${data.date}</date>
</div>`)
}

let count = 0;
cards.innerHTML = makeHtml(allData[count]);

function previousFunction(){
  count -= 1;
  if(count < 0){
    count = 0;
  }else{
    return cards.innerHTML=makeHtml(allData[count]);
  }
  
}
function NextFunction(){
  count += 1;
  if(count < allData.length){
    return cards.innerHTML=makeHtml(allData[count]);
  }else{
    count = allData.length;
  }
  
}


previous.addEventListener('click',previousFunction)

next.addEventListener('click',NextFunction)

