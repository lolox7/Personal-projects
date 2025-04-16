function letter_counter(){
    var input = document.getElementById('input').value ;
    document.getElementById('result').innerHTML = input.length + 1;
}

window.onload = document.getElementById('result').innerHTML = 0;