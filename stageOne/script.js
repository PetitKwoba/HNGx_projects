const dayOfWeek = document.querySelector("#dayOfWeek");

//Array of days
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 days.forEach((day,index)=>{
     // Check if the index of day value is equal to the returned value of getDay()
     if(index == new Date().getDay()){
        dayOfWeek.textContent = "Today is " + day;

         console.log("Today is "+day)}
     }
 )

//Dispaly Current time

function date_time(id) {
  date = new Date;
  h = date.getHours();
  
  if (h < 10) {
    h = "0" + h;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }
  
  result = 'The time is: ' + h + ':' + m + ':' + s;
  document.getElementById(id).innerHTML = result;
  setTimeout('date_time("' + id + '");', '1000');
  return true;
}

window.onload = date_time('date_time');