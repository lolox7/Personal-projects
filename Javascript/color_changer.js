function color_change() {
    var r = Math.round(Math.random()*255);
    r = String(r)
    var g = Math.round(Math.random()*255);
    g = String(g)
    var b = Math.round(Math.random()*255);
    b = String(b)
    document.getElementById("main_color_changer").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
return console.log("done");
}