/**
 * Created by Рома on 26.08.2016.
 */

function AddProjectToProject (id) {
    //var name = document.getElementById("quantity").value.toString();
    name = prompt("Write project name","");
    if(name != "" && name != null && name != "null") {
        axios({
                method: 'post',
                url: 'http://localhost:51715/project/' + id + '/project',
                data: {
                    Name: name,
                }
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
        alert("Sucsess add project with name " + name);
        console.log("Add project " + name + " to project with id = " + id);
    }else{
        alert("Write not null name");
    }
}