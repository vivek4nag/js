// here we have to select form. yhan click wala nhi chlega. we have to submit the whole form (more details in event)
const form =  document.querySelector('form')
//below usecase will give empty value bcz code run hote hi JS chal jayga & form me empty value pass kr dega.. hence jab input box me click kro tabhi input lo 
// const height =  parseInt(document.querySelector('#height').value) 

form.addEventListener('submit', function(e){
    e.preventDefault() // hum rokkk rhe ki url ke through kahi data naa bhej de

    const height =  parseInt(document.querySelector('#height').value) // height ki value aaygi string me to use integer me convert kr rhe 
    const weight =  parseInt(document.querySelector('#weight').value)
    const results =  document.querySelector('#results')
    const comment = document.querySelector('#comment')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Plase enter a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Plase enter a valid weight"
    } else{
        const bmi =  (weight / ((height*height)/10000)).toFixed(2)

        //now showing result
        results.innerHTML = `<span>${bmi}</span>`

        //now making comment
        if(bmi < 18.6){
            comment.innerHTML = `<span>You are Under Weight</span>`
        }
        if(bmi >= 18.6 && bmi < 24.9){
            comment.innerHTML = `<span>Your Weight is Normal</span>`
        }if(bmi >= 24.9){
            comment.innerHTML = `<span>You are Over Weight</span>`
        }
    }
})
