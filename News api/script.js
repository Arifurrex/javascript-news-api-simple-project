const apiKey = "22b262e07b7646b9aa8111e6cca6319c";
const blogContainer = document.getElementById('blog-container');
const searchField = document.getElementById('seach-input');
const searchbutton = document.getElementById('seach-button');

async function fetchRandomNews(){
    try{
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apikey=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      return data.articles
    }catch(error){
      console.log('error fetching data',error)
      return[];
    }
}
searchbutton.addEventListener('click',async ()=>{
  const query = searchField.value.trim();
  if(query !== ""){
    try{
      const articles = await fetchNewsQuery(query);
      displayBlog(articles);
    }
    catch(error){
      console.log('error featching news by query',error)
    }
  }
})
async function fetchNewsQuery(query){
  try{
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=30&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.articles
  }catch(error){
    console.log('error fetching data',error)
    return[];
  }
}

function displayBlog(articles){
  blogContainer.innerHTML="";
  articles.forEach(article => {
    const blogCard = document.createElement("div");
    blogCard.classList.add('blog-card');
    const img = document.createElement('img');
    img.src=article.urlToImage;
    img.alt=article.title;
    const title = document.createElement("h2");
    const truncatedTitle = article.title.length > 30 ? article.title.slice(0,30) + "...." :article.title;
    title.textContent=truncatedTitle;
    const description = document.createElement("p");
    // const truncatedDescription = article.description.length > 100 ? article.description.slice(0,100) + "...." : article.description;
    // description.textContent = truncatedDescription;
    description.textContent = article.description;


    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(description)
    blogCard.addEventListener('click',()=>{
      window.open(article.url, "_blank");
    })
    blogContainer.appendChild(blogCard);
  });
}

(async ()=>{
    try{
       const articles = await fetchRandomNews();
       displayBlog(articles);
    }catch(error){
      console.log(error)
    }
})();