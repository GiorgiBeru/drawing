const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const ctx = canvas.getContext('2d');
const clearEl = document.getElementById('clear');

let radius = 5;
let color = 'black';
let check = false;
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    check = true;
     x = e.offsetX;      
     y = e.offsetY; 
     
});

canvas.addEventListener('mousemove', (e) => {
    if (check) {
         const x2 = e.offsetX;
         const y2 = e.offsetY;
         
         line(x,y,x2,y2);
         x = x2;
         y = y2;
    }
});

canvas.addEventListener('mouseup', (e) => {
          check = false;
          x = undefined;
          y = undefined;
}); 


function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();  
}

increaseBtn.addEventListener('click', ()=> {
     radius += 3;

     if (radius > 50){
         radius = 50;
     }
     updateSize();
});

decreaseBtn.addEventListener('click', ()=> {
     radius -= 3;
     if (radius <=4) {
         radius = 3;
     }
     updateSize();
});

function updateSize(){
    sizeEl.innerText = radius;
}

colorEl.addEventListener('change', (e)=>{
    color = e.target.value;
});

clearEl.addEventListener("click", ()=>{
   ctx.clearRect (0,0, canvas.width, canvas.height);
});

function line(x1, y1, x2, y2){
    ctx.beginPath(); 
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = radius;
    ctx.stroke(); 
} 







