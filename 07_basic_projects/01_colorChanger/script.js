const buttons =  document.querySelectorAll('.button')
// console.log(buttons); // nodelist me aajayga 4 button

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target); //event e jo ho rha hai wo kahn se ho rha hai wo pta lgega target se

        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id // ya to hardcode kar do grey ya jo targt ke andar value hai wohi likh do 
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id  
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id  
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id  
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id  
        }
        if(e.target.id ==='lightcoral'){
            body.style.backgroundColor = e.target.id  
        }
        
    })
    
})
