/**
 * Created by Valera_alt on 25-Aug-16.
 */

function postc() {
    var imageId = "57bd9657fcfbb420e475f20e";
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
                Text: document.getElementById("comment").value,
            }
        }
    )
        .then(function (response) {
            alert('Success');
            return;
        })
        .catch(function (error) {
            console.log(error.toString());
            return;
        });
}