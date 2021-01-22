


// funtion to find meters from kilometer

function kilometerToMeter(km){
    if (km>0){
        return km*1000;
    }
    else{
        // in case user inputs a negative value
        console.log("ERROR! Enter a positive value..")
    }
}


// function to find budget

function budgetCalculator(watch, phone, laptop){
    // only considering positive values
    if (watch>0 && phone>0 && laptop>0)
    {
        return 50*watch+100*phone+500*laptop;       /** 50tk per watch, 100tk per phone, 500tk per laptop */  
    }
    else{
        // in case user inputs negative value
        console.log("ERROR! Enter a positive value..")
    }
        
}

// function to find hotel cost

function hotelCost(day){
    // first 10days 100taka/day
    if (day <= 10){
        return 100*day;
    }
    else if(day <= 20){
        // first 10days 100taka/day and rests are 80tk/day
        return 100*10+80*(day-10);
    }
    else if (day > 0){
        // only considering positive values
        return 100*10+80*10+50*(day-20);
    }
    else{
        // in case user inputs negative value
        console.log("ERROR! Enter a positive value..")
    }
}

// function to find the largest name

function megaFriend(names){
    if(names.length>0){
        var maxLength = "";
    for(var i=0; i<names.length; i++){
        if (names[i].length > maxLength.length){
            maxLength = names[i];
            
        }
    }
        return maxLength;
    }
    else{
        // in case user inputs numeric value
        console.log("Please enter an array with names..")
    }
}


// result1 = kilometerToMeter(1);

// result2 = budgetCalculator(1, 1, 1);

// result3 = hotelCost(25);

// result4 = megaFriend(["yyyu", "55ettt", "ggghhhh", "ghhhhhhhhhhf"]);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);