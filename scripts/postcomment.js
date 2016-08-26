/**
 * Created by Valera_alt on 25-Aug-16.
 */
function param(Name)
{
    var Params = location.search.substring(1).split("&");
    var variable = "";
    for (var i = 0; i < Params.length; i++)
    {
        if(Params[i].split("=")[0] == Name)
        {
            if (Params[i].split("=").length > 1)
                variable = Params[i].split("=")[1];
            return variable;
        }}
    return "";
}
function postc() {
    var imageId = param("idImage");
    console.log("Ok - " + imageId);
    var projectId = param("idProject");
    console.log(projectId);
    if(document.getElementById("namec").value == "") {
        alert('Name of comment is empty, please, fill it');
        return;
    }
    if(document.getElementById("comment").value == "") {
        alert('Text of comment is empty, please, fill it');
        return;
    }
    axios({
            method: 'post',
            url: 'http://localhost:51715/Image/'+imageId + '/comment',
            data: {
                Name: document.getElementById("namec").value,
                Text: document.getElementById("comment").value
            }
        }
    )
        .then(function (response) {
            alert('Success');
            window.location.reload();
            return;
        })
        .catch(function (error) {
            console.log(error.toString());
            return;
        });
}