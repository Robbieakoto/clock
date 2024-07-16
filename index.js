const timeElement = document.getElementById("clock");

//get the current time
function makeClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let session = "AM";

    if(hours > 12){
        session = "PM";
     }
     const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` + ' '+ session;

    document.getElementById("clock").innerText = clockStr;
}

makeClock();
setInterval(makeClock, 1000);
