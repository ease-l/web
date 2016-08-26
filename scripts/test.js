function addByName( idwr) {
    console.log("++++++");
    var level = 2;
    axios.get('http://localhost:51715/Project/'+idwr)
        .then(function (response) {
            var jsonarray = response.data.value;
            console.log(jsonarray);
            var name = jsonarray.Name;
            console.log(jsonarray);
            if(jsonarray.Images.length > 0){
                console.log(name);
                var newrow = ('<li id=\'' + idwr +'\''+  'name = "'+ idwr +'"  class="icon2">'+
                '<a onclick="tree(\''+idwr+'\')" rollapp-href=""><p oncontextmenu="AddProjectToProject(\''+idwr+'\');">' + name + '</p></li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById("spisok").appendChild(div);
                if(jsonarray.Images.length > 0) {
                    console.log("+" + name);
                    AddImage(idwr, idwr, 0, level);
                }
            }else{
                var newrow = ('<li id=\'' + idwr +'\''+  'name = "'+ idwr +'"  class="icon"><p oncontextmenu="AddProjectToProject(\''+idwr+'\');">'
                + name + '</p></li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById("spisok").appendChild(div);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}

function addByNameWithChild(l, id, level) {
    axios.get('http://localhost:51715/Project/'+id)
        .then(function (response) {
            var jsonarray = response.data.value;
            var name = jsonarray.Name;
            var id = jsonarray.Id;
            var projectMas = jsonarray.Projects;
            var newrow=('<li id=\'' + id +'\''+ ' name = "'+ id +'" class="icon2"><a onclick="tree(\''+id+
            '\')" rollapp-href=""><p oncontextmenu="AddProjectToProject(\''+id+'\');">'
            +name+'</p></li>');
            var div = document.createElement('li');
            div.style.marginLeft = 1.5*level+"%";
            div.className = "alert alert-success";
            div.innerHTML = newrow;
            document.getElementById("spisok").appendChild(div);
            for (var j = 0; j < projectMas.length; j++) {
                addByNameChild(projectMas[j], id + '' + j, id, level);
            }
            if(jsonarray.Images.length > 0){
                AddImage(id, id, projectMas.length, level);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}


function addByNameWithChild2(name, id, idwr, level) {
    axios.get('http://localhost:51715/Project/'+id)
        .then(function (response) {
            var jsonarray = response.data.value;
            var projectMas = jsonarray.Projects;
            level++;
            for (var j = 0; j < projectMas.length; j++) {
                addByNameChild(projectMas[j], idwr + '' + j, idwr, level);
            }

            if(jsonarray.Images.length > 0){
                AddImage(id, idwr, projectMas.length, level);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}

function AddImage(projectId, parId, k, level) {
    axios.get('http://localhost:51715/Project/'+projectId + '/image')
        .then(function (response) {
            var jsonarray = response.data.value;
            console.log(jsonarray);
            for(var i = 0; i < jsonarray.length; i++){
                var nameIm = jsonarray[i].Name;
                var imageId = jsonarray[i].Id;
                var url = jsonarray[i].Url;
                var newrow = ('<a class = "url" href="http://localhost:63342/r-template/comment.html?idImage=' +imageId+  '&idProject='+projectId+'">'
                + '<li id=\'' + parId+ '' + (k+i) +'\''+ ' name = "'+ imageId +'" style="display: none;" class="icon4">'
                +nameIm+'</li></a>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById(parId).appendChild(div);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}

function addByNameChild(namet, idwr, nid, level) {
    axios.get('http://localhost:51715/Project/'+namet)
        .then(function (response) {
            var jsonarray = response.data.value;
            var name = jsonarray.Name;
            var idname = jsonarray.Id;
            var projectMas = jsonarray.Projects;
            console.log(jsonarray);
            console.log(namet);
            if(projectMas.length > 0){
                var newrow = ('<li id=\'' + idwr +'\''+ ' name = "'+ idname +'" style="display: none;" class="icon2">'+
                '<a onclick="tree(\''+idwr+'\')" rollapp-href=""><p oncontextmenu="AddProjectToProject(\''+idname+'\');" >'+name+'</p></li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById(nid).appendChild(div);
                addByNameWithChild2(name, idname, idwr, level);
                if(jsonarray.Images.length > 0) {
                    AddImage(namet, idwr, projectMas.length, level);
                }
                level++;
            }else if(jsonarray.Images.length > 0){
                console.log(name);
                var newrow = ('<li id=\'' + idwr +'\''+  'name = "'+ idname +'" style="display: none;" class="icon2">'+
                '<a onclick="tree(\''+idwr+'\')" rollapp-href=""><p oncontextmenu="AddProjectToProject(\''+idname+'\');" >' + name + '</p></li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById(nid).appendChild(div);
                if(jsonarray.Images.length > 0) {
                    AddImage(namet, idwr, projectMas.length, level);
                }
            }else{
                var newrow = ('<li oncontextmenu="AddProjectToProject(\''+idname+'\');" id=\'' + idwr +'\''+  'name = "'+ idname +'" style="display: none;" class="icon">'
                +'<p oncontextmenu="AddProjectToProject(\''+idname+'\');"  >'+ name + '</p></li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.5*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById(nid).appendChild(div);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}

var ExampleApplication = React.createClass({
    render: function () {
        var message = 'Response write in console';
        var level = 2;
        axios.get('http://localhost:51715/Project')
            .then(function (response) {
                var jsonarray = response.data.value;
                for (var i = 0; i < jsonarray.length; i++) {
                    var id = jsonarray[i].Id;
                    console.log(jsonarray[i]);
                    var projectMas = jsonarray[i].Projects;
                    if(projectMas.length > 0){
                        addByNameWithChild(id, id, level);
                    }else {
                        addByName(id);
                    }
                }
            })
            .catch(function (error) {
                console.log(error.toString());
            });
        return null;
    }

});

ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('textfrominput')
);

