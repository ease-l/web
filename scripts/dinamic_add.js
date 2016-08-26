function add() {
    var name = document.getElementById("quantity").value.toString();
    axios({
            method: 'post',
            url: 'http://localhost:51715/project/',
            data: {
                Name: name,
            }
        }
    )
        .then(function (response) {
            window.location.reload();
            return;
        })
        .catch(function (error) {
            console.log(error.toString());
            return;
        });
}

function addByName(name) {
    var newrow=('<li  class="icon2">'+name+'</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    var name = document.getElementById("quantity").value.toString();
    div.innerHTML = newrow;
    document.getElementById("s2").appendChild(div);
}