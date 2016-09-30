/**
 * Created by Рома on 26.08.2016.
 */

function upload() {
    //console.log("+");
    var data = new FormData();
    data.append("uploadImage", document.getElementById('upload').files[0]);
    axios.put("http://api.ease-l.xyz/Download", data).then(function (response) {
        var url = response.data.value.Result;
        uploadimageup(url);
        //console.log(response.data.value);
    })
        .catch(function (error) {
            //console.log(error)
        });

}


function uploadimageup(url) {
    var data = {};
    data.Name = document.getElementById("upload").textContent;
    //console.log("uploadimageup");
    var data = {};
    var imageName = "";
    var s = document.getElementById("upload").textContent;
    for(var i = 0; i+5 < s.length; i++){
        if(s[i] == 'П' && s[i+1] == 'р' && s[i+2] == 'е' && s[i+3] == 'в' && s[i+4] == 'ь' && s[i+5] == 'ю'){
            for(var j = i+6; s[j]!= '.'; j++){
                imageName+=s[j];
            }
        }
    }
    data.Name = imageName;
    data.Url = url;
    axios.post("http://api.ease-l.xyz/Project/"+uploadProjectId+"/image",data).
    then(function (response) {
        //console.log(uploadProjectId);
            alert("Image Add");
        window.location.reload();
    }).catch(function (error) {
        //console.log(error)
    });
}

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

function upload2() {
    var data = new FormData();
    var imageId = param("idImage");
    data.append("uploadImage", document.getElementById('upload2').files[0]);
    axios.put("http://api.ease-l.xyz/Download", data).then(function (response) {
        var urlIm = response.data.value.Result;
        var imageName = "";
        var s = document.getElementById("upload2").textContent;
        for(var i = 0; i+5 < s.length; i++){
            if(s[i] == 'П' && s[i+1] == 'р' && s[i+2] == 'е' && s[i+3] == 'в' && s[i+4] == 'ь' && s[i+5] == 'ю'){
                for(var j = i+6; s[j]!= '.'; j++){
                    imageName+=s[j];
                }
            }
        }
        axios({
                method: 'put',
                url: 'http://api.ease-l.xyz/image/' + imageId ,
                data: {
                    name:imageName,
                    url:urlIm
                }
            }
        )
            .then(function (response) {
                //console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                alert(error.toString());
            });
        //console.log(response.data.value);
    })
        .catch(function (error) {
            //console.log(error)
        });

}