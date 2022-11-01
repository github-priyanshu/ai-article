
function makeTags(){
  var pages=["Bhool Bhulaiyaa 2",'Prithviraj',"Brahmastra","Cirkus"],html="";

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

/*REDIRECT UI MAKER*/
var downloadData={src: redirect.lnk};

if(redirect){
  heads.style.display='';
  var name='To Continue :';
  if(redirect.mid){
    downloadData=movies[redirect.mid];
    downloadData.src="https://ai-player.netlify.app?sh=8&mid="+redirect.mid;
    name='Download "'+downloadData.name+'"';
  }
  heads.innerHTML=`<h1 class="name">${name}</h1>
      <h2 class="release texCen">Scroll Down(नीचे जाएं)</h2>`;

  makeLinkUi();
}

function makeLinkUi(){
  if(navigator.userAgent.includes("Instagram")){

    heads.innerHTML=`<h1 class="name">नीचे क्लिक करें</h1>
        <h2 class="release texCen"><a href=${location.href} target='_blank' download>Click to Continue</a></h2>`;

  }else{
    var html=`
    <div class='flex c w100p'>
      <h2 id="gdTxt">Please wait. Creating link...</h2>
      <a href="${downloadData.src}">
        <button id="redBtn" style=
        'padding: 10px;background: #008400;border-radius: 5px;border: 1px solid #0a0;color: #fff;font-size: 1.1em;'
        disabled>Please Wait</button>
      </a>
    </div>`;
    op(".eng").insertAdjacentHTML("afterend",html);

    setTimeout(()=>{
      var rb=op("#redBtn");
      rb.disabled=false;
      rb.innerHTML="Continue...";

      op('#gdTxt').innerHTML="Click to Continue now..."
    },8000)
  }
}


/*
?redirect="{\"lnk\":\"https://sldkjf\"}"
?redirect="{\"mid\":\"3\"}"
*/
