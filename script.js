window.onload = function(){
    var h = 12;
    var m = 0;
    
    setInterval(startTime, 1000);

    function startTime (){
        m += 1;
        var mm;
        var hh;
        if (m<10) {mm = "0"+m} else {mm = m};
        if (m>=59) {m = -1};
        if (m<0) {h += 1};
        if (h<10) {hh = "0"+h} else {hh = h};
        if (h>=23) {h = -1};
       
        document.getElementById("time").value = hh+":"+mm;
    }
}