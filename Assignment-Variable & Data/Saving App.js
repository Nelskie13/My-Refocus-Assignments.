//You are now working on a finance app that helps users save money. 
//To encourage users to continue saving, you are adding a feature to show how much money they have already saved.
//Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. Use
//console.log and variables to output the following in JavaScript:
//"Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000.”

//Sam wants to save ₱10,000. Store in variable goalToSave
let goalToSave=10000.00;
//Sam already saved ₱7,500. Store in variable alreadySave
let alreadySave=7500.00;
//Sam need to save ₱2,500, Store in variable needToSave
let needToSave=2500.00;
//Divide the needToSave/goalToSave. Store in variable decimalValue.
let decimalValue=needToSave/goalToSave;
//100 percent. Store in variable in percent.
let percent=100;
//decimalValue x percent. Store in variable percentage
let percentage=decimalValue*percent;
//alreadySave + needToSave. Store in variable totalSavings
let totalSavings=alreadySave+needToSave;
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentage}% away from your goal of saving ₱${totalSavings}`);