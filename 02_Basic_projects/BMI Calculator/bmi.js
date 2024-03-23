const form =  document.querySelector('form');

form.addEventListener("submit", function(e){
    e.preventDefault(); 

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if(isNaN(height) || height == "" || height < 0 )
    {
        result.innerHTML="Please enter a valid height !";
    }
    else if(isNaN(weight) || weight =="" || weight < 0 )
    {
        alert("Please enter a valid weight !");
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML= `<span>Your BMI is ${bmi}</span>`
        if(bmi <= 18.49)
            result.innerHTML += "<br/> You are underweight.";
        else if(bmi >= 18.50 && bmi <= 24.99)
            result.innerHTML += "<br/> You have a normal weight.";
        else if(bmi >= 25.00 && bmi <= 29.99)
            result.innerHTML += "<br/> You are overweight.";
        else
            result.innerHTML += "<br/> You are obese.";
    }
})