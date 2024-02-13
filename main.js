//check if there's local storge color
let maincolor=localStorage.getItem("maincolor");
//!== is not empty
if(maincolor!==null){
    document.documentElement.style.setProperty('--no-color',maincolor);
    //remove active class from all colors
    
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');
        
        //add active class on element with data-color ===local storge item
        if(element.dataset.color===maincolor){
            //add active class
            element.classList.add('active')
        }
    });
    


};
let backgound=true
//varibal to control the interval
let thebackgroundinter;
//cheack if there's local storge random background item
let backgroundlocal=localStorage.getItem("background_option");
//check if random background local storge not empty
if(backgroundlocal !== null){
if(backgroundlocal==='true'){
    backgound=true;
}else{
    backgound=false;
}
//remove active class from all span
document.querySelectorAll(".random-background span").forEach(Element=>{
    Element.classList.remove('active')
})
if(backgroundlocal==='true'){
    document.querySelector('.random-background .yes').classList.add('active')
}else{
    document.querySelector('.random-background .no').classList.add('active')
}
}



//togggle spin class on icon
document.querySelector('.toggle-settings i').onclick=function(){
    //toggle for rotaiton
    this.classList.toggle("fa-spin");

    document.querySelector('.setting-box').classList.toggle('open')

};
//switch color
const cololi=document.querySelectorAll(".colors-list li");
cololi.forEach(li=>{
    //click in every li
    li.addEventListener('click',(e)=>{

        //console.log(e.target.dataset.color)
        document.documentElement.style.setProperty('--no-color',e.target.dataset.color);
        //set color on local storge
        localStorage.setItem("maincolor",e.target.dataset.color)
        //remove active class from children
        //تارجت العنصر الي بتارجت عليه
    handelactive(e)

    });
});
//swich random background
const randombackground=document.querySelectorAll(".random-background span");
randombackground.forEach(span=>{
    //click in every span
    span.addEventListener('click',(e)=>{

    
    handelactive(e)
        //add active class in self
        e.target.classList.add("active");
        if(e.target.dataset.backgound === 'yes'){
            backgound=true
            randomaiz();
            localStorage.setItem("background_option",true);
        

        }else{
            backgound=false;
            clearInterval(thebackgroundinter);
            localStorage.setItem("background_option",false);
        }
    })
})




//select landing page element
let landingpage=document.querySelector('.lading-page');
//get array of imgs
let imgsarray = ["01.jpg","02.jpg","03.jpg","04.jpg"];



function randomaiz(){
if(backgound===true){
    thebackgroundinter = setInterval(() => {
             //get random number
            let randomnumber=Math.floor(Math.random() * imgsarray.length);
            
             //shange backgound imge url
        landingpage.style.backgroundImage='url("imgs/'+ imgsarray[randomnumber] +'")';
        },1000);
        
        
}
}
randomaiz();
//select skils
jQuery(document).ready(function(){
//select skills selector
let ourskills=document.querySelector('.skills');

window.onscroll=function(){
    let skillsofffsettop=ourskills.offsetTop;
    //skills outerheigt
    let skillsouterheight=ourskills.offsetHeight;
    //window height
    let windowheight=this.innerHeight;
    //window scrolll top 
    let windoscrlltop=this.scrollY ;
 
    if(windoscrlltop >(skillsofffsettop + skillsouterheight - windowheight -900)){
        
         let allskills=document.querySelectorAll('.skill-box .skill-progress span');
         allskills.forEach(skill=>{
         skill.style.width=skill.dataset.percentage;
     });
   
    }
}
});
//end skills
// create proup with the image
let gallery=document.querySelectorAll(".gallery img");
gallery.forEach(img=>{
    img.addEventListener("click",(e)=>{
        //create overlay element
        let overlay=document.createElement("div")
        //add class to overlay
        overlay.className="popup-overlay";
        //append overlay  to body
        document.body.appendChild(overlay);
        //crate the popp box
        let poppbox=document.createElement('div')
        //add class to poppbox
        poppbox.className='popp-box';
        if(img.alt!==null){
            //crate headimg
            let imgheading=document.createElement("h3")
            //crate text for heading
            let imgtext=document.createTextNode(img.alt)
            //append the text to img
            imgheading.appendChild(imgtext);
            //append the heading to the poppbpox
            poppbox.appendChild(imgheading);
        }
        //crate the img
        let poppimg=document.createElement('img');
        //set img sourc
        poppimg.src=img.src;
        //add img to popp box
        poppbox.appendChild(poppimg)
        //add popp box to body
        document.body.appendChild(poppbox);
        //crate close span
        let closebutton=document.createElement('span');
        //create the close button text
        let closebuttontext=document.createTextNode("x");
        //append text 
        closebutton.appendChild(closebuttontext)
        //add class to close buttton
        closebutton.className="closebutton"
        //add close butoon to poppbox
        poppbox.appendChild(closebutton)
    });
});
//close poppbox
document.addEventListener("click",function(e){
if(e.target.className=="closebutton"){
    //remove the cureent popp
    e.target.parentNode.remove();
    //remove overlay
    document.querySelector(".popup-overlay").remove()
}
})
// select all bullets
const allbullts=document.querySelectorAll('.nav-bullets .bullet')


//select nav selector
const navigaton=document.querySelectorAll('.links li a')

function scrolltosomewhere(elements){
elements.forEach(ele=>{
    ele.addEventListener("click", (e) =>{
document.querySelector(e.target.dataset.section).scrollIntoView({
    behavior:'smooth'
});
    });
});

}
scrolltosomewhere(allbullts);
scrolltosomewhere(navigaton);
function handelactive(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
        
    });
    //add active class in self
    ev.target.classList.add("active");

}
let bulletsspan=document.querySelectorAll(".bullets-option span");
let bulletscontiner=document.querySelector(".nav-bullets");
let bulletlocalitem=localStorage.getItem("bullets_option")
if(bulletlocalitem!==null){
    bulletsspan.forEach(span=>{
        span.classList.remove("active");

    })
    if(bulletlocalitem==="yes"){
        bulletscontiner.style.display='block';
        document.querySelector(".bullets-option .yes").classList.add('active')
    }else{
        bulletscontiner.style.display='none';
        document.querySelector(".bullets-option .no").classList.add('active')
    }
}
bulletsspan.forEach(span=>{
    span.addEventListener('click',(e) =>{
        if(span.dataset.display ==='show'){
            bulletscontiner.style.display='block'
            localStorage.setItem("bullets_option","yes")
        }else{
            bulletscontiner.style.display='none'
            localStorage.setItem("bullets_option","no")
        }
        handelactive(e)
    })
})
//rest bottton
document.querySelector(".reset-option").onclick=function(){
    localStorage.clear();
    window.location.reload();
}
let togglemenue=document.querySelector(".toggle-menue");
let links=document.querySelector(".links")
togglemenue.onclick=function(){
    
    this.classList.toggle("meue-active")
    links.classList.toggle('open')
    
}
