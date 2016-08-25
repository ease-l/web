function add() {
    var newrow=('<li  class="icon">'+document.getElementById("quantity").value.toString()+'</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    var v = document.getElementById("quantity").value.toString();
    div.innerHTML = newrow;
    document.getElementById("spisok").appendChild(div);
}

function addByName(name) {
    var newrow=('<li  class="icon">'+name+'</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    var v = document.getElementById("quantity").value.toString();
    div.innerHTML = newrow;
    document.getElementById("spisok").appendChild(div);
}