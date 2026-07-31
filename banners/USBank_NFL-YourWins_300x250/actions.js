var container=document.getElementById("container"),stage=document.getElementById("stage"),art=document.getElementById("art"),intro=document.getElementById("intro"),clicktag=document.getElementById("clicktag");
function animate(){
  var e=CustomEase.create("custom","M0,0 C0.802,0 0.2,1 1,1 ");
  var tl=gsap.timeline({delay:.25});
  tl.to(intro,{duration:.85,x:-300,ease:e},0)
    .from(stage,{duration:.85,x:66,ease:e},0)
    .from(art,{duration:6,scale:1.06,transformOrigin:"50% 50%",ease:"power1.out"},0);
  var m=location.search.match(/pause=([0-9.]+)/);if(m)tl.pause(parseFloat(m[1]));
}
function staticFallback(){intro.style.display="none";}
window.onload=function(){
  clicktag.addEventListener("click",function(){window.open(window.clickTag)});
  if(typeof gsap==="undefined"){staticFallback();return!1}
  animate();return!1
};
