/**
 * Created by Valera_alt on 24-Aug-16.
 */
var ExampleApplication = React.createClass({
    render: function () {
        var imageId = param("idImage");
        axios.get('http://localhost:51715/Image/' + imageId)
    .then(function (response) {
        var jsonobject = response.data.value;
        document.getElementById("name").textContent = jsonobject.Name;
        document.getElementById("image").src = jsonobject.Url;
        if(jsonobject.Comments.length > 0) {
            axios.get('http://localhost:51715/Image/' + imageId + '/comment')
                .then(function (response) {
                    for (var i = 0; i < response.data.value.length; ++i) {
                        var jsonobject = response.data.value[i];
                        var newrow = ('<li><p><i>'+jsonobject.Name+'</i></p></li>');
                        var div = document.createElement('li');
                        div.className = "alert alert-success";
                        div.innerHTML = newrow;
                        document.getElementById("comments").appendChild(div);
                        newrow = ('<li><p>'+jsonobject.Text+'</p></li>');
                        div = document.createElement('li');
                        div.className = "alert alert-success";
                        div.innerHTML = newrow;
                        document.getElementById("comments").appendChild(div);
                        var newrow = ('<hr>');
                        var div3 = document.createElement('li');
                        div3.className = "alert alert-success";
                        div3.innerHTML = newrow;
                        document.getElementById("comments").appendChild(div3);
                    }
                })
                .catch(function (error) {
                    console.log(error.toString());
                });
        }
    })
    .catch(function (error) {
        console.log(error.toString());
        alert("Bad id");
    });
return ;
}

});

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

ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('image')
);
