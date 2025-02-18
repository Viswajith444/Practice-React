
function fn(i, delay){

    if(i){
        document.getElementById("monkey").textContent = "MONKEY MODE 🦍";
        i = 0
        delay = 2000
    }
    else{
        document.getElementById("monkey").textContent = "monkey 🐵";
        i = 1
        delay = 3000
    }

    setTimeout(() => fn(i), delay);
}

timerid = setTimeout(fn(0,2000) , 0);