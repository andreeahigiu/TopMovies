const navSlide= () =>{
    window.onload=function(){ 
        const menu= document.querySelector('.menu');
        const nav= document.querySelector('.nav-bar');
        const navBar= document.querySelectorAll('.nav-bar li');
    
   
   

    menu.addEventListener('click', () => {
         //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navBar.forEach((link, index)=>{  // index arata cate el sunt in lista de meniu
            
            if(link.style.animation){    //daca link-urile au deja animatii pe ele
                link.style.animation= '';
            }
            else{
                link.style.animation = `navBarFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });

        //menu icon animation
        menu.classList.toggle('toggle');

    });
    

}
}

navSlide();

// var introPic = document.querySelector("p").offsetTop;
// window.onscroll= function() {
//     if(wiwndow.pageYOffset >0) {
//         var opac = window.pageYOffset / this.introPic;
//         document.getElementById('background').style.background = "white";
//         // "linear-gradient(rgba(255, 255, 255, " + opac + "),rgba(255, 255, 255, " + opac + ")), URL(movie,jpg) no-repeat";
//     }
// }
 

//const app = ()=>{
    
//}

//app();

