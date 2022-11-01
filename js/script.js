var log=console.log;
function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

function resetFormat(){
  let keys={
    col: "color",
    fs: "fontSize",
    ff: "fontFamily",
    fw: "fontWeight",
    bg: "background"
  }
  for(let val in keys){
    opp(`*[${val}]`).forEach(elem=>{
      elem.style[keys[val]]=elem.getAttribute(val);
      elem.removeAttribute(val);
    })
  }
  
  opp("*[ico]").forEach(val=>{
    val.insertAdjacentHTML("beforeend",elems[val.getAttribute("ico")]);
    val.removeAttribute("ico");
    val.style.fill=val.getAttribute("fill");
  })

  opp(".border").forEach(val=>{
    try{val.style.width=val.getAttribute("w")+"%"}catch{}
    try{val.style.margin=val.getAttribute("m")+"px 0"}catch{}
  })
}
resetFormat();

function addStyle(url){
  document.body.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${url}">`);
}
function addScript(url){
  var elem=document.createElement("script");
  elem.src=url;
  document.body.insertAdjacentElement("beforeend",elem);
}
function makeScript(obj){
  var elem=document.createElement('script');
  for(let val in obj){
    elem.setAttribute(val,obj[val]);
  }
  document.body.insertAdjacentElement("beforeend",elem);
}

function getAgo(time){
  var nowTime=new Date().getTime(),
  diff=Math.abs(Math.floor((nowTime - time))/1000);
  var pri={
    seconds: 0,
    minutes: 60,
    hours: 60*60,
    days: 60*60*24,
    months: 60*60*24*30,
  }
  var s="months";
  for(let val in pri){
    if(pri[val]>diff){
      s=oldT;
      break;
    }
    var oldT=val;
  }
  return [Math.floor(diff/pri[s]),s];
}

/*REDIRECT*/
var redirect=location.search,heads=op(".heads");

if(redirect){
  redirect=redirect.replace('?redirect=','').replaceAll("%3D",'=');
  redirect=atob(redirect);
  redirect=JSON.parse(decodeURI(redirect));

  changeRedirectUI();
}

function changeRedirectUI(){
  for(let i=0; i<2; i++){
    heads.nextElementSibling.remove();
  }
  heads.style.display='none';
}

log(redirect)
