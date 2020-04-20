const sec = document.querySelector('section');
const title = document.querySelector('.title');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
let size = 60;

let scrollDown = ()=>{
    sec.style.height = size + 'px'
    sec.style.position = 'sticky';
    sec.style.top = '0px';
    sec.style.fontSize = '10px';
    sec.style.boxShadow = '5px 10px 18px #888888'
    title.style.lineHeight = '1rem';
    title.style.padding = '0px';
    title.style.border = 'none';
    h1.style.top = '50%';
    h1.style.left = '2%';
    h2.innerText = '';
    h2.style.border = 'none'
  
}

//resizing h1 in the top section//
let media = window.matchMedia('(max-width: 450px)');

    const resize = (e)=>{
        if(e.matches){
        title.style.fontSize = '9px';
        h1.style.top = '25%';
        h1.style.zIndex = '1';
        h2.style.marginTop = '50px'};
    }


window.addEventListener('scroll', scrollDown);
media.addEventListener('change', resize)
resize(media)

//skills//

const tk = document.querySelector('.tick');
let li = document.getElementsByClassName('li');


const change = function (){
   tk.classList.toggle('change_tick_1')
}
const change1 = function (){
    tk.classList.toggle('change_tick_2')
 }
 const change2 = function (){
    tk.classList.toggle('change_tick_3')
 }
const unchange = function (){
    tk.classList.toggle('change_tick_1')
}
const unchange1 = function (){
    tk.classList.toggle('change_tick_2')
}
const unchange2 = function (){
    tk.classList.toggle('change_tick_3')
}
for (let i=0; i < li.length; i++){
   if(i <= 4){
    li[i].addEventListener('mouseover', function (){
               change()
    })
    li[i].addEventListener('mouseout', function (){
        unchange()
    })
   }
   else if (i > 4 && i <=8) {
    li[i].addEventListener('mouseover', function (){
        change1()
})
li[i].addEventListener('mouseout', function (){
    unchange1()
})
   } 
   else if (i > 8){
    li[i].addEventListener('mouseover', function (){
        change2()
})
   
    li[i].addEventListener('mouseout', function (){
        unchange2()
    })
} 
}


//scroll to Top//
// let footer = document.querySelector('.footer_1');
const btn = document.querySelector('button');
const goUp = () => {
    window.scrollTo({
        top: btn.offsetTop + '-1px',
        behavior: 'smooth'
    });
    console.log('what?')
}
btn.addEventListener('click', goUp)