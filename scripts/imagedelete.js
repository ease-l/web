/**
 * Created by Valera_alt on 25-Aug-16.
 */
function param(Name) {
    var Params = location.search.substring(1).split("&");
    var variable = "";
    for (var i = 0; i < Params.length; i++) {
        if (Params[i].split("=")[0] == Name) {
            if (Params[i].split("=").length > 1)
                variable = Params[i].split("=")[1];
            return variable;
        }
    }
    return "";
}
function deli() {

    var imageId = param("idImage");
    var projectId = param("idProject");
    axios({
            method: 'delete',
            url: 'http://api.ease-l.xyz/Project/' + projectId +'/Image/' + imageId,
            data: {}
        }
    )
        .then(function (response) {
           // console.log(response);
            window.history.back();
        })
        .catch(function (error) {
            alert(error.toString());
        });
}