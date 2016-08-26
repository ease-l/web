var lit, i;
var addButtons = false;
function tree(liter) {
    lit = liter;
    i = 0;
    if (addButtons == false) {
        addButtons = true;
        var button1 = document.createElement('button');
        button1.id = "button_choose_image";
        button1.innerText = "Choose image";
        button1.onclick = function () {
            read();
        };
        button1.className = "alert alert-success";
        document.getElementById("buttons").appendChild(button1);
        var button2 = document.createElement('button');
        button2.id = "button_upload";
        button2.innerText = "Upload";
        button2.className = "alert alert-success";
        button2.onclick = function () {
            upload();
        }
        document.getElementById("buttons").appendChild(button2);
    }
}

function show() {
    var el;
    if (el = document.getElementById(lit + i)) {
        el.style.display = (el.style.display == 'block') ? 'none' : 'block';
        i++;
        show();
    }
}
function upload(imagebytes) {
    var request = require('request');
    var FormData = require('form-data');
    var form = new FormData();
    form.append('uploadImage', imagebytes,
        {contentType: 'image/png', filename: 'image.png'});
    var r = request.post('http://ease-l.xyz/Image/Download', requestCallback);
    r._form = form;
    r.setHeader('content-length', form.getLength());
}
