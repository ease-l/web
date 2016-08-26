/**
 * Created by Рома on 26.08.2016.
 */

function upload() {
    var data = new FormData();
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
    var data = new JSON;
    data.Name = document.getElementById("upload").textContent;
    data.Url = url;
    axios.post("http://localhost:51715/Project/"+uploadImageId+"/image",data).then(function (response) {
        console.log(response.data.value);
    })
        .catch(function (error) {
            console.log(error)
        });
}