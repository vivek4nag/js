const clock =  document.getElementById('clock')
// const clock =  document.querySelector('#clock') // either getlementby ID lo ya query selector se lo.. same baat

const tarikh = document.getElementById('date')

//set interval method ko ek inteval dedo.. us inteval pr ye programme ko baar baar chalata jaayga 
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    tarikh.innerHTML = date.toLocaleDateString() 

}, 1000) // 1000 ms baad baad update hoga humara function