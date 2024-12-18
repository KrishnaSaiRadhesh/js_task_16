/*
Task: Even or Odd Checker (Electricity Billing System)
Description: Determine if a given meter reading (in kWh) is even or odd. If the reading is even,
suggest a discount code 'EVENPOWER10'. If it's odd, suggest 'ODDSAVER5'.
Input Example: meter_reading = 452
Expected Output: Even reading, use discount code: EVENPOWER10
*/

meter_reading = 435;
if(meter_reading%2==0)
    console.log('Even reading, use discount code: EVENPOWER10');
else
    console.log('Odd reading, use discount code: ODDSAVER5');


// Task: Temperature Conversion (Weather App)
// Description: Allow the user to convert a temperature from Celsius to Fahrenheit. Use the formula:
// (Celsius * 9/5) + 32.
// Input Example: Celsius = 25
// Expected Output: Temperature: 77°F

Celsius = 25;
console.log("Temperature: ",(Celsius * 9/5)+32,"°F");

/*
Task: Personalized Greeting System
Description: Based on the time of day, greet the user appropriately: Morning (6 AM-11:59 AM),
Afternoon (12 PM-5 PM), Evening (5 PM-9 PM), and Night (9 PM-6 AM).
Input Example: current_time = '2 PM'
Expected Output: Good Afternoon!
*/

let current_time = 10;
let period = 'AM';

if(period == 'AM' && (current_time >= 6 && current_time<12))
{
    console.log('Good Morning!');
}
else{
    if(period == 'PM' && (current_time == 12 || (current_time>=0 && current_time<5)))
        console.log('Good Afternoon');
    else{
        if(period == 'PM' && (current_time>=5 && current_time<9))
            console.log("Good Evening!");
        else
            console.log("Good Night!");
    }
}

    

/*
Task: FizzBuzz (Event Alert System)
Description: Develop a program to assign teams based on event number: Divisible by 3 ('Handled
by Team A'), divisible by 5 ('Handled by Team B'), divisible by both ('Handled by Special Team'),
otherwise 'No team assigned'.
Input Example: event_number = 30
Expected Output: Handled by Special Team
*/



// Method-1
event_number = 30;

if(event_number%3==0 && event_number%5==0)
{  
    console.log("Handled by Special Team");
}
else
{
    if(event_number%3==0)
        {
            console.log("Handled by Team A");
        }

    else{
            if(event_number%5==0)
                 console.log("Handled by Team B")
             else
                 console.log("No team assigned")
        }
    
}

//Method - 2

(event_number%3==0 && event_number%5==0)?console.log("Handled by Special Team"):event_number%3==0?console.log("Handled by Team A"):(event_number%5==0)? console.log("Handled by Team B"):console.log("No team assigned");


/*
Task: Speed Limit Checker (Traffic Monitoring System)
Description: Check vehicle speed and respond: Speed < 60 ('Normal Speed'), 60-80 ('Warning:
Close to Overspeeding'), > 80 ('Overspeeding! Penalty applied').
Input Example: speed = 75
Expected Output: Warning: Close to Overspeeding
*/


speed = 70;
if(speed<60)
    console.log('Normal Speed');
else{
    if(speed>60 && speed<80){
        console.log('Close to Overspeeding');
    }
    else
    {
        console.log('Overspeeding! Penalty applied');
    }
}


/*
Task: Grade Calculator (Performance Review)
Description: Assign grades based on scores: 90+ ('A+'), 80-89 ('A'), 70-79 ('B'), 60-69 ('C'), < 60
('F').
Input Example: score = 85
Expected Output: Grade: A (Excellent)
*/

score = 92;
if(score>=90)
    console.log('A+')
else{
    if(score>=80 && score<=89)
        console.log('A')
    else{
        if(score>=70 && score<=79)
            console.log('B')
        else{
            if(score>=60 && score<=69)
                console.log('C')
            else
                console.log('Fail')
        }
    }
}

/*
Task: ATM Withdrawal Validator
Description: Simulate an ATM withdrawal. Prompt for account balance and withdrawal amount. If the
withdrawal amount exceeds balance, show 'Insufficient funds!'; otherwise, deduct and show
'Transaction successful!'.
Input Example: balance = 2000, withdrawal = 2500
Expected Output: Insufficient funds!
*/

let balance = 3000, withdrawal = 2500;
if(balance<withdrawal)
{
    console.log("Insufficient funds")
}
else
{
    balance = balance - withdrawal;
    console.log("Transaction successful!")
    console.log("Remaining balance is : ", balance)
}


/*
Task: Shopping Discount Calculator (Festival Offer)
Description: Calculate the price after applying discounts: Purchase > $1000 (20% discount),
$500-$1000 (10% discount), below $500 (no discount).
Input Example: purchase_amount = 1200
Expected Output: Discounted price: $960
*/

purchase_amount = 1200
if(purchase_amount>=1000)
    console.log("Discounted price: ",purchase_amount = purchase_amount - purchase_amount*0.20)
else{
    if(purchase_amount>500 && purchase_amount<1000)
        console.log("Discounted price: ",purchase_amount = purchase_amount - purchase_amount*0.10)
    else
        console.log("No Discount")
}

/*
Task: Movie Ticket Price Calculator (Dynamic Pricing System)
Description: Assign ticket prices based on age: Age < 12 ($5), 12-60 ($10), > 60 ($7).
Input Example: age = 65
Expected Output: Ticket price: $7
*/

let age = 65;
if(age>60)
{
    console.log("Ticket price: $7");
}
else
{
    if(age>12 && age<60)
        console.log("Ticket price: $10");
    else
        console.log("Ticket price: $5")
}






