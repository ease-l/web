var lit;
var addButtons = false;
var uploadProjectId;
function tree(liter) {
    lit=liter;
    var s =  document.getElementById(lit).innerHTML;
    console.log(s);
    uploadProjectId = "";
    for(var i = 0; i < s.length; i++){
        if(s[i] == 't' && s[i+1] == 'r'&& s[i+2] == 'e'&& s[i+3] == 'e'&& s[i+4] == '('&& s[i+5] == '\''){
            for(var j = i+6; s[j]!='\''; j++)
                uploadProjectId+=s[j];
            break;
        }
    }
    console.log(uploadProjectId);
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

