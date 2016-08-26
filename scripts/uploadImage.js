/**
 * Created by Рома on 26.08.2016.
 */

function upload() {
    var data = new FormData();
    data.append("uploadImage", document.getElementById('upload').files[0]);
    axios.put("http://localhost:51715/Download", data).then(function (response) {
        var url = response.data.value.Result;
        alert(url);
        console.log(response.data.value);
    })
        .catch(function (error) {
            console.log(error)
        });

}