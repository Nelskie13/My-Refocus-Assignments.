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
function testBMICalculator(){
    const result=computedBMI(75,1.73);
    const expected=25.05930702662969;
    
    console.assert(
        result===expected,
        `The result ${result} is match the expected value ${expected}`
    )
}
console.log(computedBMI(75,1.73))
BMIStatus(25)