const computed_BMI=require("./BMICalculator");
test("Check if the weight is 75 and Height in meters is 1.73 is equals to 25.05930702662969 BMI",()=>{
    expect(computed_BMI.BMI(75,1.73)).toEqual(25.05930702662969);
});
test("Check if the weight is 70 and Height in meters is 1.73 is equals to 23.38868655818771 BMI",()=>{
    expect(computed_BMI.BMI(70,1.73)).toEqual(23.38868655818771);
});
test("Check if the weight is 65 and Height in meters is 1.73 is equals to 21.71806608974573 BMI",()=>{
    expect(computed_BMI.BMI(65,1.73)).toEqual(21.71806608974573);
});
