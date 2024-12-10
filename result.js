document.addEventListener('DOMContentLoaded',function(){
   let homebtn=document.getElementById("home")
   let sportsbtn=document.getElementById("sports")
   let businessbtn=document.getElementById("business")
   let techbtn=document.getElementById("technology")
   let healthbtn=document.getElementById("health")
   let entertainmentbtn=document.getElementById("entertainment")
   let lan=document.getElementById("mylanguage")

   homebtn.addEventListener("click",function(){
       fetchdata('all',lan.value)
   })

   sportsbtn.addEventListener("click",function(){
    fetchdata('sports',lan.value)
})
businessbtn.addEventListener("click",function(){
    fetchdata('business',lan.value)
})
techbtn.addEventListener("click",function(){
    fetchdata('technology',lan.value)
})
healthbtn.addEventListener("click",function(){
    fetchdata('health',lan.value)
})
entertainmentbtn.addEventListener("click",function(){
    fetchdata('entertainment',lan.value)
})

lan.addEventListener("change",function(){
    let category=document.querySelector('.active-category').id;
    fetchdata(category,lan.value)
})
async function fetchdata(cat,lang){
if(cat==null && lang==null){
    let result=await fetch(`  https://newsapi.org/v2/everything?q=all&language=hi&apiKey=44a9c0d1f5ac4ce888f133d685660206`)
    // console.log(result.json());
    let res=await result.json()
    // console.log(res.articles);
    let totaldata=res.articles.map((item)=>{
      return(
        `
        <div class='left'>
    <img src=${item.urlToImage}>
    <div class='content'>
    <h3> ${item.title} </h3>
    <p> ${item.description}</p>
    <a href=${item.url}>More News</a>
        </div>
        </div>
        `
      )
    })
    document.getElementById("mydiv").innerHTML=totaldata.join('')
}
else{
    let result=await fetch(` https://newsapi.org/v2/everything?q=${cat}&language=${lang}&apiKey=44a9c0d1f5ac4ce888f133d685660206`)
    // console.log(result.json());
    let res=await result.json()
    // console.log(res.articles);
    let totaldata=res.articles.map((item)=>{
      return(
        `
        <div class='left'>
    <img src=${item.urlToImage}>
    <div class='content'>
    <h3> ${item.title} </h3>
    <p> ${item.description}</p>
    <a href=${item.url}>More News</a>
        </div>
        </div>
        `
      )
    })
    document.getElementById("mydiv").innerHTML=totaldata.join('')
}
}
fetchdata()









})