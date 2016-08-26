var lit,i, addButtons = false;
function tree(liter) {
    lit=liter;
    show();  //развертываем/сворачиваем с заданным интервалом
    if(addButtons == false){
        addButtons = true;
        var button1 = document.createElement('button');
        button1.id = "button_choose_image";
        button1.innerText = "Choose image";
        button1.onclick= function () {
            read();
        };
        button1.className = "alert alert-success";
        document.getElementById("test").appendChild(button1);
        var button2 = document.createElement('button');
        button2.id = "button_upload";
        button2.innerText = "Upload";
        button2.className = "alert alert-success";
        document.getElementById("test").appendChild(button2);
    }
}

function show() {
    var el;
    for(var i = 0; i < 100; i++)
    {
        if (el = document.getElementById(lit + i)) {
            el.style.display = (el.style.display == 'block') ? 'none' : 'block';
        }
    }
}
