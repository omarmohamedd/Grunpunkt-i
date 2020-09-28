  const navLinks=document.querySelectorAll(".list"); 
    
    navLinks.forEach(link =>{
        
        link.addEventListener("mouseleave",()=>{
            
          link.classList.add("backLine");  
            
            setTimeout(function(){
                
                link.classList.remove("backLine");  
            },300)
        }); 
    });