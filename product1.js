//products



const productIImg=document.querySelector(".products-i-img");
const productIP=document.querySelector(".products-i-p");

const productITl=gsap.timeline({
            
            defaults:{duration:1,ease:"power2.inout"}
        });
 

   
    
window.addEventListener("load",()=>{
    
     productITl.fromTo(productIP,{x:"-200%",opacity:0},{x:"0%",opacity:1});
    productITl.fromTo(productIImg,{x:"200%",opacity:0},{x:"0%",opacity:1},"-=1");
});
    


