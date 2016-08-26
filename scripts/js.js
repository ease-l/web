var lit;
var addButtons = false;
function tree(liter) {
    lit=liter;
    show();
    if(addButtons == false){
        addButtons = true;
        var button2 = document.createElement('button');
        button2.id = "button_upload";
        button2.innerText = "Upload";
        button2.className = "alert alert-success";
        document.getElementById("button_new_project").appendChild(button2);
    }
}

function show() {
    var el;
    for(var i = 0; i < 10; i++) {
        if (el = document.getElementById(lit + i)) {
            el.style.display = (el.style.display == 'block') ? 'none' : 'block';
        }
    }
}
