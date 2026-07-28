var container=document.getElementById("container"),preload=document.getElementById("preload"),preloadSVG=document.getElementById("preload_svg"),preloadCircle=document.getElementById("preload_circle"),photo=document.getElementById("photo"),photoC=document.getElementById("photoC"),bg=document.getElementById("bg"),intro=document.getElementById("intro"),logoUSB=document.getElementById("logoUSB"),logoNFL=document.getElementById("logoNFL"),logoDiv=document.getElementById("logoDiv"),headline=document.getElementById("headline"),sub=document.getElementById("sub"),ctaC=document.getElementById("ctaC"),cta=document.getElementById("cta"),ctaT=document.getElementById("ctaT"),legal=document.getElementById("legal"),clicktag=document.getElementById("clicktag"),tlPre;
function preloaderAnimation(){preload.style.visibility="visible";var c=2*Math.PI*16;preloadCircle.setAttribute("stroke-dashoffset",c+1);preloadCircle.setAttribute("stroke-dasharray","175 "+c);gsap.set(preloadSVG,{opacity:1});tlPre=gsap.timeline({repeat:-1});tlPre.fromTo(preloadSVG,{rotation:-360},{duration:.75,rotation:0,ease:"none"})}
function removePreload(){tlPre&&tlPre.pause();preload.style.display="none"}
function init(){photo.complete?start():photo.addEventListener("load",start)}
function start(){gsap.to(preload,{duration:.4,opacity:0,ease:"power1.inOut",onComplete:removePreload});animate()}
function animate(){var e=CustomEase.create("custom","M0,0 C0.802,0 0.2,1 1,1 ");
var headArt=document.getElementById("headArt");
gsap.set([logoDiv,sub,legal].filter(Boolean),{opacity:0});
gsap.set([headArt],{opacity:0});
gsap.set(ctaC,{width:0});
var tl=gsap.timeline({delay:.25});
tl.to(intro,{duration:.8,x:-728,ease:e},0)
.from(photo,{duration:7,scale:1.28,transformOrigin:"50% 40%",ease:"power1.out"},0)
.from(photoC,{duration:.8,x:204,ease:e},0)
.from(bg,{duration:.8,x:-160,ease:e},0)
.from(logoUSB,{duration:.7,x:34,opacity:0,ease:e},.45)
.from(logoNFL,{duration:.7,x:-34,opacity:0,ease:e},.45)
.to(logoDiv,{duration:.5,opacity:1,ease:"power1.inOut"},.6)
.to(headArt,{duration:.7,opacity:1,ease:"power1.inOut"},.5)
.to(sub,{duration:.6,opacity:1,ease:"power1.inOut"},.9)
.to(ctaC,{duration:.7,width:108,ease:e},1.1)
.to(legal,{duration:.5,opacity:1,ease:"power1.inOut"},1.3);
var m=location.search.match(/pause=([0-9.]+)/);if(m)tl.pause(parseFloat(m[1]));}
function over(){gsap.to(cta,{duration:.3,backgroundColor:"#fff",ease:"power1.inOut"});gsap.to(ctaT,{duration:.3,filter:"invert(1) sepia(1) saturate(6) hue-rotate(-25deg)",ease:"power1.inOut"})}
function out(){gsap.to(cta,{duration:.3,backgroundColor:"#cf2a36",ease:"power1.inOut"});gsap.to(ctaT,{duration:.3,filter:"none",ease:"power1.inOut"})}
function staticFallback(){preload.style.display="none";intro.style.display="none";}
window.onload=function(){clicktag.addEventListener("click",function(){window.open(window.clickTag)});if(typeof gsap==="undefined"){staticFallback();return!1}preloaderAnimation();init();clicktag.addEventListener("mouseover",over);clicktag.addEventListener("mouseout",out);return!1};
