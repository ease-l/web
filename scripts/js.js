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
    /*var request = new XMLHttpRequest();
    request.open('POST', 'http://httpbin.org/post', false);
    var formData = new FormData();
    formData.append("uploadImage",imagebytes);
    request.send(formData);
    console.log(request.response);*/
    var boundary = String(Math.random()).slice(2);
    var boundaryMiddle = '--' + boundary + '\r\n';
    var boundaryLast = '--' + boundary + '--\r\n'

    var body = ['\r\n'];
        // добавление поля
        body.push('Content-Disposition: form-data; name="uploadImage"\r\n\r\n' +imagebytes + '\r\n');

    body = body.join(boundaryMiddle) + boundaryLast;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit', true);

    xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

    xhr.onreadystatechange = function() {
        if (this.readyState != 4)
            console.log("(_!_)");

        alert( this.responseText );
    }

    xhr.send(body);
}

function AddProjectToProject () {
    alert("+");
}