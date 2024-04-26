const allDataArray = [
    {
        title:"what is html",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cupiditate deserunt!"
    },
    {
        title:"what is javascript",
        details:"Loremdfgfsdgfds ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cupiditate deserunt!"
    },
    {
        title:"what is bangladesh",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cupiditate deserunt!"
    },
    {
        title:"what is you",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cupiditate deserunt!"
    },
    {
        title:"what is your intension",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cufdgdfgpiditate deserunt!"
    },
    {
        title:"what is your habbit",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate blanditiis molestiae. Libero, cupiditate deserunt!"
    }
]

const container = document.querySelector(".container");
const makeHtml = (data)=>{
    return `<details>
    <summary class="custom-summary">${data.title}</summary>
    <p>${data.details}</p>
   </details>`
}

container.innerHTML = allDataArray.map(x=>{
    let insideHtml = makeHtml(x);
    return insideHtml;
}).join(" ");