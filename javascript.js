<<<<<<< HEAD
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

function letter_counter(){
    var input = document.getElementById('input').value ;
    document.getElementById('result').innerHTML = input.length + 1;
}

window.onload = document.getElementById('result').innerHTML = 0
=======
>>>>>>> ed73f2d7b52427b17f945034d48b7d67245f61f5
