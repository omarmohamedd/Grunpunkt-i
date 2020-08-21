
$('.carousel').carousel({
     interval: 3000
});

const navBar=document.querySelector("nav");
const textLayer=document.querySelector(".section-ii-text-layer");
const imgLayer=document.querySelector(".section-ii-img-layer");
const sectionIIImg=document.querySelector(".section-ii-img img");
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
    
    navTl.fromTo(navBar,1.5,{y:"-200%",background:"transparent"},{y:"0%",background:"#ffff"});
    
    navTl.fromTo(hI,{opacity:0,y:"200%"},{opacity:1,y:"50%"},"-=1");
    navTl.fromTo(spanI,{color:"white"},{color:"#00A86B"});
});


function animateSectionII()
{
    const sectionIITl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });
    
 sectionIITl.fromTo(textLayer,1.5,{x:"0%"},{x:"100%"});
    
    sectionIITl.fromTo(imgLayer,1.5,{x:"0%"},{x:"100%"},"-=1.5");
    
     sectionIITl.fromTo(sectionIIImg,1,{scale:2},{scale:1},"-=1"); 
    
    sectionIIScene=new ScrollMagic.Scene({
        
         triggerElement: sectionII,
            triggerHook: 0.25,
         reverse:false
    })
    
    .setTween(sectionIITl)
        .addTo(controller);
        
}

animateSectionII();


//animals section

const animalsH3=document.querySelector(".animals-p h3");
const animalsP=document.querySelector(".animals-p p");
const svgs=document.querySelectorAll(".svgs svg");
const svgsP=document.querySelectorAll(".svgs p");


        
function svgAnimation()
{
    const svgTl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });

    svgTl.fromTo(animalsH3,{opacity:0,y:"-100%"},{opacity:1,y:"0%"});
    svgTl.fromTo(animalsP,{opacity:0,y:"-100%"},{opacity:1,y:"0%"},"-=0.8");
    svgTl.fromTo(svgs,{opacity:0,y:"100%"},{opacity:1,y:"0%"},"-=1.5");
      svgTl.fromTo(svgsP,{opacity:0},{opacity:1},"+=0.4");
    
new ScrollMagic.Scene({
        
         triggerElement: sectionIII,
            triggerHook: 0.5,
           reverse:false
    })
    
    .setTween(svgTl)
        .addTo(controller);
  
}
svgAnimation();






//section iv


$('.slider').slick({
  infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
      dots: true,
    speed:1500,
  slidesToShow: 3,
  slidesToScroll: 3
});


const sectionIv=document.querySelector("#section-iv");
const sliderP=document.querySelector("#section-iv h2");
const sliderr=document.querySelector(".slider");




function sliderAnimation()
{
    const sliderTl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });

    
    sliderTl.fromTo(sliderP,{opacity:0,y:"-100%"},{opacity:1,y:"0%"});
        sliderTl.fromTo(sliderr,{opacity:0,y:"100%"},{opacity:1,y:"0%"},"-=0.5");
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













