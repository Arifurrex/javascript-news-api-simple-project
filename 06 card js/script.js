const allData = [
  {
    
    name:"arifur Rahman",
    img:"image/profile-pic (1).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"24 october 2017"
  },
  {
    
    name:"abdur Rahman",
    img:"image/profile-pic (2).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  },   
  {
    
    name:"abdul alim",
    img:"image/profile-pic (3).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"abdus salam",
    img:"image/profile-pic (4).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"abdur Rahman",
    img:"image/profile-pic (7).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 
  {
    
    name:"abdur Rahman",
    img:"image/profile-pic (6).png",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit placeat expedita veniam. Tempore non maiores earum eaque voluptatem, reiciendis aliquam nostrum delectus corrupti consequatur necessitatibus. Dolorem aspernatur quisquam dolore quam excepturi nobis nam vel dolorum adipisci culpa animi itaque impedit architecto, esse illum. Dolores, sit recusandae assumenda ipsam ...",
    
    date:"4 october 2027"
  }, 

   
]

const cards = document.querySelector('.cards');
const makeHtml = (data)=>{
    return (`<div class="card">
    <img src="${data.img}" alt="">
    <h2>${data.name}</h2>
    <p>${data.text} </p>
    
    <date>write on : ${data.date}</date>
</div>`)
}

cards.innerHTML = allData.map(x=>{
  let insideHtml = makeHtml(x);
  return insideHtml;
}).join(" ");