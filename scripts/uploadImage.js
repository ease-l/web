/**
 * Created by Рома on 26.08.2016.
 */

function upload() {
    var data = new FormData();
    console.log("upload");
    data.append("uploadImage", document.getElementById('upload').files[0]);
    axios.put("http://localhost:51715/Download", data).then(function (response) {
        var url = response.data.value.Result;
        uploadimageup(url);
        console.log(response.data.value);
    })
        .catch(function (error) {
            console.log(error)
        });

}
function uploadimageup(url) {
    console.log("uploadimageup");
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
    console.log(uploadProjectId);
    axios.post("http://localhost:51715/Project/"+uploadProjectId+"/image",data).then(function (response) {
        console.log(response.data.value);
    })
        .catch(function (error) {
            console.log(error)
        });
}