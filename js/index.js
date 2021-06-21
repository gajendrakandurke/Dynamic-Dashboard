//DOM
//https://codepen.io/bradtraversy/pen/XLrQvz
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    userName = document.getElementById('name'),
    focus = document.getElementById('focus');

//options
const showAmPm = true;
let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

const showTime = () => {

    const amPM = hour >= 12 ? 'PM' : 'AM';

    hourformat = hour % 12 || 12;

    time.innerHTML = `${hourformat}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

const setBGImgGreetingMsg = () => {
    if (hour < 12) {
        document.body.style.backgroundImage = 'url("https://i.ibb.co/7vDLJFb/morning.jpg")'
        greeting.textContent = 'Good Morning, ';
    }
    else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }

};

// Get Name
const getName = () => {
    if (localStorage.getItem('name') === null) {
        userName.textContent = '[Enter Name]';
    } else {
        userName.textContent = localStorage.getItem('name');
    }
}

// Set Name
const setName = (e) =>{
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            userName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
const getFocus=()=> {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
const setFocus= (e)=> {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBGImgGreetingMsg();
getName();
getFocus();


