const dayOfWeek = document.querySelector("#dayOfWeek");

// Array of days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.forEach((day, index) => {
    // Check if the index of day value is equal to the returned value of getDay()
    if (index === new Date().getDay()) {
        dayOfWeek.textContent = "Today is " + day;
    }
});

// Display Current time

function date_time(id) {
    const date = new Date();
    let h = date.getHours();
    
    if (h < 10) {
        h = "0" + h;
    }
    let m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    let s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    
    const result = 'The time is: ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout(() => date_time(id), 1000);
    return true;
}

window.onload = () => date_time('date_time');