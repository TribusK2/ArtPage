window.onload = function(){

    // Start counting at the <input> #time.
    setInterval(startTime, 1000);
    function startTime (){
        var h = Number(document.getElementById("time").value.slice(0,2));
        var m = Number(document.getElementById("time").value.slice(3,5));
        m += 1;
        
        if (m < 10) {mm = "0"+m} else {mm = m};
        if (m > 59) {mm = "0"+0 ; h += 1};
        if (h < 10) {hh = "0"+h} else {hh = h};
        if (h > 23) {hh = "0"+0};
        document.getElementById("time").value = hh+":"+mm;
    }

}