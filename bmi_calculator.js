function computedBMI(weight,heightInMeter){
    let computedBMI = weight / (heightInMeter**2);
    return computedBMI;
}
function BMIStatus(BMI){
    if(BMI < 18.5){
        console.log("Underweight 🥺");    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        console.log("Normal 🤗");
    }else if((BMI > 25) && (BMI < 29.9 )){
        console.log("Overweight😰");
    }else{
        console.log("Obese 😱");
    }
}
console.log(computedBMI(76,1.73))
BMIStatus(25)