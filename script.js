let col=document.getElementById('color');
let bgcol=document.getElementById('wrap');
let btn=document.getElementById('submit');
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',()=>{
    let hexval='#';
    for(let i=1;i<=6;i++){
        hexval+=randomvalue();
    }
    col.innerHTML=hexval;
    bgcol.style.backgroundColor=hexval;
})
function randomvalue(){
    let randomval=Math.floor(Math.random()*16);
    return hex[randomval]
}
