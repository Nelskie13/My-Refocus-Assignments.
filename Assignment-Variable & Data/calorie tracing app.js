    //Cycling for 30 minutes burns 225 calories
    // Sam decides to do cycling 30 minutes everyday for 15 days
    
    //Store in a variable name caloriesPerMinutes the number of calories burned per minutes
let caloriesPerMinutes=225;  //Cycling for 30 minutes burns 225 calories
    //Count the number of times Sam will cycling in a week and store in a variable numTimesSamCycling
let numTimesSamCycling=30;
    //Store in a variable name runsMinutesPerDay the number of minutes Sam has decided to cycling
let runsMinutesPerDay=0.5;
    // Compute the total numbers of hours of cycling in 2 weeks using numTimesSamCycling and runsMinutesPerDay
    // and store the result in a variable named totalMinutesRunning.
let totalMinutesRunning=numTimesSamCycling*runsMinutesPerDay;
    // Compute the total calories burned using caloriesPerMinutes and totalHoursRunning.
let totalCaloriesBurned=caloriesPerMinutes*totalMinutesRunning;
    // Display the message using console.log.
console.log(`Great work, Sam! After ${runsMinutesPerDay} hours of cycling every day for a week, you may lose a total of ${totalCaloriesBurned} calories`);
