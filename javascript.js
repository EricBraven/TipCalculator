let span = document.querySelector('span');
let peopleBox = document.querySelector('#number');
function calculateTip(){
    let bill = document.querySelector('#input').value;
    let percent5 = document.querySelector('#percent5');
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let span = document.querySelector('span');
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people) * 0.05;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
}


percent5.addEventListener("click", calculateTip);

function calculateTip10(){
    let bill = document.querySelector('#input').value;
    let percent10 = document.querySelector('#percent10');
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people) * 0.10;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
}

percent10.addEventListener("click", calculateTip10);


function calculateTip15(){
    let bill = document.querySelector('#input').value;
    let percent15 = document.querySelector('#percent15');
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people) * 0.15;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
}

percent15.addEventListener("click", calculateTip15);


function calculateTip25(){
    let bill = document.querySelector('#input').value;
    let percent25 = document.querySelector('#percent25');
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people) * 0.25;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
}

percent25.addEventListener("click", calculateTip25);

function calculateTip50(){
    let bill = document.querySelector('#input').value;
    let percent50 = document.querySelector('#percent50');
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people) * 0.50;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
}

percent50.addEventListener("click", calculateTip50);

function customSelf(){
    let bill = document.querySelector('#input').value;
    let custom = document.querySelector('#custom').value;
    let people = document.querySelector('#number').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    let total, person;

    console.log(bill);

    if(bill === "" || people === ""){
        span.style.display = "block";
        peopleBox.style.border = "2px solid red";
        return;
    }else{
        span.style.display = "none"
        peopleBox.style.border = "none;"
    }
    
    
    person = (bill * people * custom) / 100;
    console.log(person);
    personTip.innerHTML = person.toFixed(2);
    total = (bill * people);
    console.log(total);
    totalTip.innerHTML = total.toFixed(2);
    return;
}

custom.addEventListener("input", customSelf);

let btn6 = document.getElementById("reset");
function resetBack(){
    let people = document.querySelector('#number').value;
    let bill = document.querySelector('#input').value;
    let totalTip = document.querySelector("#total-tip");
    let personTip = document.querySelector("#perPersonTip");
    if(people != "0" || bill != "0"){
        bill = "";
        people = "";
        custom.value = "";
        totalTip.innerHTML = "0.00";
        personTip.innerHTML = "0.00";
    }
}

btn6.addEventListener("click", resetBack);