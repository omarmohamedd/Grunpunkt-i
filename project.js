
$('.carousel').carousel({
     interval: 6000
});

const navBar=document.querySelector("nav");
const textLayer=document.querySelector(".section-ii-text-layer");
const imgLayer=document.querySelector(".section-ii-img-layer");
const sectionIIImg=document.querySelector(".section-ii-img img");
const sectionIIImgContainer=document.querySelector(".section-ii-img");
const sectionII=document.querySelector("#section-ii");
const sectionIII=document.querySelector("#section-iii");
const hI=document.querySelector("h1");
const spanI=document.querySelector(".span-1");
let controller;
let sectionIIScene;

controller=new ScrollMagic.Controller();


const navTl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });
 

window.addEventListener("load",()=>{
    
    navTl.fromTo(navBar,1.5,{y:"-200%",opacity:0,background:"transparent"},{y:"0%",opacity:1,background:"#ffff"});
    
    navTl.fromTo(hI,{opacity:0,y:"200%"},{opacity:1,y:"50%"},"-=1");
    navTl.fromTo(spanI,{color:"white"},{color:"#00A86B"});
});
   const navLinks=document.querySelectorAll(".list"); 
    
    navLinks.forEach(link =>{
        
        link.addEventListener("mouseleave",()=>{
            
          link.classList.add("backLine");  
            
            setTimeout(function(){
                
                link.classList.remove("backLine");  
            },300)
        }); 
    });

function animateSectionII()
{
    const sectionIITl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });
    
 sectionIITl.fromTo(textLayer,1.5,{x:"0%"},{x:"100%"});
    
    sectionIITl.fromTo(imgLayer,1.5,{x:"0%"},{x:"100%"},"-=1.5");
    
     sectionIITl.fromTo(sectionIIImg,1,{scale:2},{scale:1},"-=1"); 
sectionIITl.to(sectionIIImgContainer,1,{ boxShadow: "6px 6px 6px gray"}); 
    sectionIIScene=new ScrollMagic.Scene({
        
         triggerElement: sectionII,
            triggerHook: 0.25,
         reverse:false
    })
    
    .setTween(sectionIITl)
        .addTo(controller);
        
}

animateSectionII();








//section iv




const sectionIv=document.querySelector("#section-iv");
const sliderP=document.querySelector("#section-iv h2");
const lowerDivII=document.querySelector(".feed-managment");
const uperDivII=document.querySelector(".gutHealthManagement");
const uperDivIII=document.querySelector(".toxinsManagement");
const lowerDivI=document.querySelector(".vetsSolutions");
const uperDivI=document.querySelector(".rawMaterialsAndPremixes");


function sliderAnimation()
{
    const sliderTl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });

    
    sliderTl.fromTo(sliderP,{opacity:0,y:"-100%"},{opacity:1,y:"0%"});
        sliderTl.fromTo(uperDivI,{opacity:0,x:"-100%"},{opacity:1,x:"0%"},"-=0.5");
    sliderTl.fromTo(uperDivII,{opacity:0,x:"-100%"},{opacity:1,x:"0%"},"-=0.3");
    sliderTl.fromTo(uperDivIII,{opacity:0,x:"-100%"},{opacity:1,x:"0%"});
    sliderTl.fromTo(lowerDivI,{opacity:0,x:"100%"},{opacity:1,x:"0%"},"-=1.5");
    sliderTl.fromTo(lowerDivII,{opacity:0,x:"100%"},{opacity:1,x:"0%"},"-=1");
new ScrollMagic.Scene({
        
         triggerElement: sectionIv,
            triggerHook: 0.5,
           reverse:false
    })
    
    .setTween(sliderTl)
        .addTo(controller);
  
}

sliderAnimation();



if(window.innerWidth<1000)
    {
        textLayer.style.opacity="0";
    }













