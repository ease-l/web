function add() {
    var newrow=('<li class="icon3">textxtxt</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    div.innerHTML = newrow;
    document.getElementById("s2").appendChild(div);
}