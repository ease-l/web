function addByName(name) {
    var newrow=('<li  class="icon">'+name+'</li>');
    var div = document.createElement('li');
    div.style.marginLeft = 1.1+"%";
    div.className = "alert alert-success";
    var v = document.getElementById("quantity").value.toString();
    div.innerHTML = newrow;
    document.getElementById("spisok").appendChild(div);
}

function addByNameWithChild(name, id, level) {
    axios.get('http://localhost:51715/Project/'+id)
        .then(function (response) {
            var jsonarray = response.data.value;
            var name = jsonarray.Name;
            var id = jsonarray.Id;
            var projectMas = jsonarray.Projects;

            var newrow=('<li  id=\'' + id +'\''+ ' name = "'+ id +'" class="icon2"><a onclick="tree(\''+id+'\')" rollapp-href="">'+name+'</li>');
            var div = document.createElement('li');
            div.style.marginLeft = 1.1*level+"%";
            div.className = "alert alert-success";
            div.innerHTML = newrow;
            document.getElementById("spisok").appendChild(div);
            for (var j = 0; j < projectMas.length; j++) {
                level++;
                addByNameChild(projectMas[j], id + '' + j, id, level);
            }
        })
        .catch(function (error) {
            console.log(error.toString());
        });
}


function addByNameWithChild2(name, id, nid, level) {
    axios.get('http://localhost:51715/Project/'+id)
        .then(function (response) {
            var jsonarray = response.data.value;
            var name = jsonarray.Name;
            var projectMas = jsonarray.Projects;
            for (var j = 0; j < projectMas.length; j++) {
                addByNameChild(projectMas[j], id + '' + j, id, level);
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
            console.log(name);
            if(projectMas.length > 0){
                var newrow = ('<li id=\'' + idwr +'\''+  'name = "'+ idname +'" style="display: none;" class="icon2"><a onclick="tree(\''+id+'\')" rollapp-href="">' + name + '</li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.1*level + "%";
                div.className = "alert alert-success";
                div.innerHTML = newrow;
                document.getElementById(nid).appendChild(div);
                level++;
                addByNameWithChild2(name, id, nid, level);
            }else{
                var newrow = ('<li id=\'' + idwr +'\''+  'name = "'+ idname +'" style="display: none;" class="icon">' + name + '</li>');
                var div = document.createElement('li');
                div.style.marginLeft = 1.1*level + "%";
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
        var level = 1;
        var message = 'Response write in console';
        axios.get('http://localhost:51715/Project')
            .then(function (response) {
                var jsonarray = response.data.value;
                for (var i = 0; i < jsonarray.length; i++) {
                    var name = jsonarray[i].Name;
                    var id = jsonarray[i].Id;
                    var projectMas = jsonarray[i].Projects;
                    if(projectMas.length > 0){
                        level++;
                        addByNameWithChild(name, id, level);
                    }else {
                        addByName(name);
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



