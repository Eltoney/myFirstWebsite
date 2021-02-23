let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpg') {
        myImage.setAttribute('src', 'images/2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/1.jpg')
    }
}


let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Hi " + myName;

    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hi " + storedName;
}

myButton.onclick = function() {
    setUserName();
}