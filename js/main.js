var  paragrop=document.querySelector(".butt");
console.log(paragrop);

paragrop.addEventListener("click",function(){
    if(paragrop.nextElementSibling.classList.contains("content")){
        paragrop.nextElementSibling.classList.remove("content")
    }
    //  else{
    //      paragrop.nextElementSibling.classList.add("content")
    //  }
})

var icon=document.querySelector(".icon");
icon.addEventListener("click",function(e){
    e.target.parentNode.classList.add("content");
})