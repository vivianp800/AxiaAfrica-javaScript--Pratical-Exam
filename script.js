// 1.check Grade
function checkGrade(score){
    if (score >= 70){
        console.log("A");
    }else if(score >= 60){
        console.log("B")
    }else if(score >= 50){
        console.log("C");
    }else{
        console.log("F");
    }
}
// 2.login
function login(username, password){
    if (username === "admin" && password === "2345"){
        console.log("Login successful");
    }else{
        console.log("Login failed");
    }
}
// 3.celsius to fahrenheit
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}
// 4.can vote
function canVote(age){
    if (age >= 18){
        console.log("You can vote");
    }else{
        console.log("You cannot vote");
    } 
}
// 5.temperature status
function temperatureStatus(Temp){
    if (Temp < 0){
        console.log("Freezing");
    }else if (Temp <=15){
        console.log("Cold");
    }else if (Temp <= 25){
        console.log("cool");
    }else{
        console.log("Hot");
    }
}

