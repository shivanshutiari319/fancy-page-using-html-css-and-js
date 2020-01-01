const text=document.querySelector('.fancy');

const textStr=text.textContent;

const splitStr=textStr.split("");
text.textContent="";
for(let i=0;i<splitStr.length;i++){
text.innerHTML+='<span>'+splitStr[i] + '</span>' ;

}
let char=0;
let timer=setInterval(onclick,50);
 
function onclick(){
const span=text.querySelectorAll('span')[char];
span.classList.add('fade');
char++;
if(char===splitStr.length){
    complete();
    return;
}
}
function complete(){
  clearInterval(timer);
  timer=null;


}

