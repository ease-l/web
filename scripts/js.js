var lit;
var addButtons = false;
var uploadProjectId;
function tree(liter) {
    lit=liter;
    var s =  document.getElementById(lit).innerHTML;
    console.log(s);
    uploadProjectId = "";
    for(var i = 0; i < s.length; i++){
        if(s[i] == 'j' && s[i+1] == 'e'&& s[i+2] == 'c'&& s[i+3] == 't'&& s[i+4] == '('&& s[i+5] == '\''){
            for(var j = i+6; s[j]!='\''; j++)
                uploadProjectId+=s[j];
            break;
        }
    }
    console.log(uploadProjectId);
    var e = document.getElementById("deleteBox");
    if(e!=null && e.checked) {

        var del = confirm("Delete project?");
        if(del){
            axios({
                    method: 'delete',
                    url: 'http://localhost:51715/project/' + uploadProjectId ,
                    data: {}
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
    }
    show();
}

function show() {
    var el;
    for(var i = 0; i < 10; i++) {
        if (el = document.getElementById(lit + i)) {
            el.style.display = (el.style.display == 'block') ? 'none' : 'block';
        }
    }
}
