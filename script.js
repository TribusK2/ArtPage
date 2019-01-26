window.onload = function(){
    setInterval(startTime, 1000);
    setInterval(hour, 3000)
    var h = 0;
    var m = 10;
    function hour(){  
        h += 1;
        while (h<10) {h = "0"+h};
        return h;
    };
    function startTime (){
        m +=1;
        document.getElementById("time").value = h+":"+m;
    }
}