var lit,i;
var addButtons = false;
function tree(liter) {
    lit=liter;
    i=0;
    show();
    if(addButtons == false){
        addButtons = true;
        var button1 = document.createElement('button');
        button1.id = "button_choose_image";
        button1.innerText = "Choose image";
        button1.onclick= function () {
            read();
        };
        button1.className = "alert alert-success";
        document.getElementById("button_new_project").appendChild(button1);
        var button2 = document.createElement('button');
        button2.id = "button_upload";
        button2.innerText = "Upload";
        button2.className = "alert alert-success";
        document.getElementById("button_new_project").appendChild(button2);
    }
}

function show() {
    var el;
    if(el = document.getElementById(lit + i)) {
        el.style.display = (el.style.display == 'block')?'none':'block';
        i++;
        show();
    }
}


function upload(imagebytes) {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://httpbin.org/post', false);
    var formData = new FormData();
    formData.append("uploadImage",imagebytes);
    request.send(formData);
    console.log(request.response);
}

function AddProjectToProject () {
    alert("+");
}