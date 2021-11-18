function next(){
    var activeNow =  document.querySelector(".active");
    activeNow.classList.remove("active");
    activeNow.classList.add("not-active");
    var oldID=Number(activeNow.id);
    var newID=oldID+1;
    console.log(oldID, newID)
    if (newID>3){
        newID=1
    }
    var activeNext = document.getElementById(newID);
    activeNext.classList.remove("not-active");
    activeNext.classList.add("active")
}

function prev(){
    var activeNow =  document.querySelector(".active");
    activeNow.classList.remove("active");
    activeNow.classList.add("not-active");
    var oldID=Number(activeNow.id);
    var newID=oldID-1;
    console.log(oldID, newID)
    if(newID<1){
        newID=3
    }

    var activeNext = document.getElementById(newID);
    activeNext.classList.remove("not-active");
    activeNext.classList.add("active")
}