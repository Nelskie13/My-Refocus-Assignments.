function computedBMI(weight,heightInMeter){
    let computedBMI = weight / (heightInMeter**2);
    return computedBMI;
}
function testBMICalculator(){
    const result=computedBMI(75,1.73);
    const expected=25.05930702662969;
    
    console.assert(
        result===expected,
        `The result ${result} is match the expected value ${expected}`
    )
}
console.log(computedBMI(65,1.73))