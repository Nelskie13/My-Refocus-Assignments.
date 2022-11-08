const computed_BMI = {
    BMI:function(weight,heightInMeter){
        return weight / heightInMeter**2;
    },
    
};
module.exports=computed_BMI;