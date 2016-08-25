/**
 * Created by Valera_alt on 24-Aug-16.
 */
var ExampleApplication = React.createClass({
    render: function () {
        var imageId = "57bea7e8fcfbb4130ceb1c6b";
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
                        var div = document.createElement('li');
                        var div2 = document.createElement('li');
                        div.className = "alert alert-success";
                        div2.className = "alert alert-success";
                        div.appendChild(document.createTextNode(jsonobject.Name));
                        div2.appendChild(document.createTextNode(jsonobject.Text));
                        document.getElementById("comments").appendChild(div);
                        document.getElementById("comments").appendChild(div2);
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


ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('image')
);
