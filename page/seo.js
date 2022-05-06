
function makeTags(){
  var pages=["Bhool Bhulaiyaa 2",'Prithviraj'],html="";

  var html="";
  

  /*Making first section of movies*/
  html+=`<div class="tag flex">`;
  for(let i=0; i<20; i++){
    var val=moviesAry[i];
    html+=`<a href="https://ai-player.netlify.app?mid=${val.mid}">${val.name}</a>`;
  }
  html+=`</div>`;

  /*Making section 2*/
  html+=`<div class="tag flex">`;
  for(let i=0; i<20; i++){
    var val=webseries[i];
    html+=`<a href="https://ai-player.netlify.app" rel="nofollow">${val.name}</a>`;
  }
  html+=`</div>`;

  /*making page tags*/
  html+=`<div class="tag flex">`;
  for(let i=0; i<pages.length; i++){
    var val=pages[i];
    html+=`<a href="../page/${val}.html">${val}</a>`;
  }
  html+=`</div>`;

  op(".seo").innerHTML=html;

}
makeTags();