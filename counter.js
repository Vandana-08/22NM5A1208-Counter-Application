let updatevalue = document.getElementById("updatevalue")
function onincrement() {
     let a = updatevalue.textContent;
     let countervalue = parseInt(a) + 1;
     if (countervalue>0) {
        updatevalue.style.color = "blue";
     }
     else if(countervalue<0) {
        updatevalue.style.color = "pink";
     }
     else {
        updatevalue.style.color = "voilet";
     }
     updatevalue.textContent = countervalue;
}
function set() {
    let countervalue = 0;
    updatevalue.textContent = countervalue;
    updatevalue.style.color = "orange";
}
function ondecrement() {
    let a = updatevalue.textContent;
    let countervalue = parseInt(a) - 1;
    if (countervalue>0) {
       updatevalue.style.color = "red";
    }
    else if(countervalue<0) {
       updatevalue.style.color = "yellow";
    }
    else {
       updatevalue.style.color = "black";
    }
    updatevalue.textContent = countervalue;
}