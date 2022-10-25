//You are asked to design an app that enables you to leave a tip. The tip should be
//10% of a meal cost. Write a code that shows the total tip to be paid based on the food price.
//function computeTip(totalBill){..}

function computeTip(totalBill){
    let computeTip=(totalBill*.10);
    return computeTip;
}
console.log(computeTip(100))