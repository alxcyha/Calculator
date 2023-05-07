let display = document.getElementById("screen");

function wipe(){
    display.value = "";
}
function del(){
    display.value = display.value.slice(0, -1);
}
function show(n){
    display.value += n;
}

function calc(){
    try{display.value = eval(display.value);}
    catch(error){alert("Invalid, try again.")}
}
