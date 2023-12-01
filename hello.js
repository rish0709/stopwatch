let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
let stop = document.querySelector("#stop");

let reset = document.querySelector("#reset");

let sec = hour = min = count = "0";

start.addEventListener('click', function(){
    timer = true;
    startStopWatch();

});

stop.addEventListener('click', function(){
    timer = false;
});

reset.addEventListener('click', function(){
    document.getElementById('hr').innerHTML = "00:"; 
    document.getElementById('min').innerHTML = "00:"; 
    document.getElementById('sec').innerHTML = "00:"; 
    document.getElementById('count').innerHTML = "00"; 

});

function startStopWatch(){
    if (timer){
        count++;
    
        if (count == 100){
            sec++;
            count = 0;
        }
        if (sec == 60){
            min++;
            sec = "00";
        }
        if (min == 60){
            hour++;
            min = "00";
            sec = "00";
        }
        let hrString = hour;
        let minString = min;
        let secString = sec;
        let countString = count;

        if (hour < 10){
            hrString = "0"  + hrString + ":";
        }
        if (min < 10){
            minString = "0" + minString + ":";

        }
        if (sec < 10){
            secString = "0" + secString + ":";
        }
        if (count < 10){
            countString = "0" + countString;
            console.log(count);
        }

        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(startStopWatch, 10); 

}};