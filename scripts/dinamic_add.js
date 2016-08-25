function add() {
    for(var i=0;i<10;i++){
    var newrow=('<li  class="icon3">'+document.getElementById("quantity").value.toString()+'</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    var v = document.getElementById("quantity").value.toString();
    div.innerHTML = newrow;
    document.getElementById("s2").appendChild(div);}
}