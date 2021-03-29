// Key Inputs

var shift = 0;
var capsLock = 0;
function input(value){
    if(document.getElementById("myTextarea").innerHTML == "TEXT AREA"){
        document.getElementById("myTextarea").innerHTML = "";
        document.getElementById("myTextarea").innerHTML += value;
    }else {
        document.getElementById("myTextarea").innerHTML += value;
        if (document.getElementById("capsLock").innerHTML == "Caps Lock") {
            if (capsLock == 1) {
                capsLock = 0;
                return;
            }
            capsLock = 1;
            return;
        }
        if (shift == 1 && capsLock == 1) {
            document.getElementById("textArea").innerHTML += this.value.toUpperCase();
            capsLock = 0;
            shift = 0;
            return;
        }
        if (shift == 1) {
            document.getElementById("textArea").innerHTML += this.value.toUpperCase();
            shift = 0;
            return;
        }
    
        if (capsLock == 1 && shift == 0) {
            document.getElementById("textArea").innerHTML += this.value.toUpperCase();
            return;
        }
    }
    if (document.getElementById("shift").innerHTML == "Shift") {
        shift = 1;
        return;
    }
    
};
function myFunctionSpace() {   
    if(document.getElementById("myTextarea").innerHTML == "TEXT AREA") {
        document.getElementById("myTextarea").innerHTML = "";
        document.getElementById("myTextarea").innerHTML += " "
    }else {
        document.getElementById("myTextarea").innerHTML += " ";
    }   
};
function myFunctionEnter() {   
    if(document.getElementById("myTextarea").innerHTML == "TEXT AREA") {
        document.getElementById("myTextarea").innerHTML = "";
        document.getElementById("myTextarea").innerHTML += '\n';
    }else {
        document.getElementById("myTextarea").innerHTML += '\n';
    }   
};
function myFunctionOK() {   
    if(document.getElementById("myTextarea").innerHTML == "TEXT AREA") {
        alert("Please write something!");
    }else {
        alert(document.getElementById("myTextarea").innerHTML);
    }   
};
function myFunctionBackspace() {
    if(document.getElementById("myTextarea").innerHTML == "TEXT AREA"){
        document.getElementById("myTextarea").innerHTML = "";
    }else {
        document.getElementById("myTextarea").innerHTML = myTextarea.value.substring(0, myTextarea.value.length - 1);
    }
};

