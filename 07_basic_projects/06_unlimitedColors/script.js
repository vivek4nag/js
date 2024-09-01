
//generate random color
function getRGBA() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.random();
    return `rgba(${r},${g},${b},${a})`;
}

const start = document.getElementById('start')
const stop = document.getElementById('stop')
let intervalID;

start.addEventListener('click',function(){
    if(intervalID == null){ // agr id null hai then again start generating random color
        intervalID = setInterval(function(){
            document.body.style.backgroundColor = getRGBA()
            console.log(getRGBA());
            
        } , 1000);
    }
})

stop.addEventListener('click', function(){
    clearInterval(intervalID);
    intervalID = null // basically flushing out the prev data 
})