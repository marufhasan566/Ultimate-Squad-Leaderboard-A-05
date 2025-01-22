document.getElementById("select-pedri").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('pedri-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-pierre").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('pierre-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-pique").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('pique-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-messi").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('messi-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-maria").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('maria-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-neymar").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('neymar-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-cristiano").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('cristiano-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-ramos").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('ramos-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})
document.getElementById("select-klose").addEventListener('click', function () {
    //nodelist
    const myNodelist = document.querySelectorAll("li").length;
    console.log(myNodelist.length);
    //function
    if (myNodelist <= 4) {
        const getName = document.getElementById('klose-name').innerText;
        console.log(getName);
        const playerContainer = document.getElementById("players-container");
        const li = document.createElement('li');
        li.innerText = getName;
        playerContainer.appendChild(li);
    }
    else {
        alert("You Can Not Add More Than 5 Players");
    }
})


//Disabling Button Function 
function disablePedriButtonFunction() {
    document.getElementById("select-pedri").disabled = true;
}
function disablePierreButtonFunction() {
    document.getElementById("select-pierre").disabled = true;
}
function disablePiqueButtonFunction() {
    document.getElementById("select-pique").disabled = true;
}
function disableMessiButtonFunction() {
    document.getElementById("select-messi").disabled = true;
}
function disableMariaButtonFunction() {
    document.getElementById("select-maria").disabled = true;
}
function disableNeymarButtonFunction() {
    document.getElementById("select-neymar").disabled = true;
}
function disableCristianoButtonFunction() {
    document.getElementById("select-cristiano").disabled = true;
}
function disableRamosButtonFunction() {
    document.getElementById("select-ramos").disabled = true;
}
function disableKloseButtonFunction() {
    document.getElementById("select-klose").disabled = true;
}
