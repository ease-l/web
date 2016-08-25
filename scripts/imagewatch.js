/**
 * Created by Valera_alt on 24-Aug-16.
 */
var ExampleApplication = React.createClass({
    render: function () {
        var imageId = "57bd9657fcfbb420e475f20e";
        axios.get('http://localhost:51715/Image/' + imageId)
    .then(function (response) {
        var jsonobject = response.data.value;
        document.getElementById("name").textContent = jsonobject.Name;
        document.getElementById("image").src = jsonobject.Url;
    })
    .catch(function (error) {
        console.log(error.toString());
    });
return ;
}

});


ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('name2')
);