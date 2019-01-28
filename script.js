window.onload = function(){

    // Start counting at the <input> #time.
    setInterval(startTime, 25);
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

    document.getElementById("time").addEventListener("change", timeChange);
    function timeChange (){
        var h = Number(document.getElementById("time").value.slice(0,2));
        var he = h * 1.5;
        document.getElementById("skyDay").style.animationDelay = he +"s";
        var elm = document.getElementById("skyDay");
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        
        
        document.getElementById("skyNight").style.animationDelay = he-18+"s";
        var elm2 = document.getElementById("skyNight");
        var newone = elm2.cloneNode(true);
        elm2.parentNode.replaceChild(newone, elm2);
    }   
}