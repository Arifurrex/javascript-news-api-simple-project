const navList = document.querySelectorAll('a');
const sectionElement = document.querySelectorAll('section');

navList.forEach(link=>{
    link.addEventListener('click',(e)=>{

        const linkHash = document.querySelector(link.hash);
        removeBackgroundColorOnlink();
        link.parentElement.classList.add("active");
        hideSection();
        linkHash.classList.remove('hidden');

    })
})



const removeBackgroundColorOnlink =()=>{
    navList.forEach(link=>{
        link.parentElement.classList.remove("active");
    })
}


const hideSection =()=>{
    sectionElement.forEach(section=>{
        section.classList.add('hidden');
    })
}