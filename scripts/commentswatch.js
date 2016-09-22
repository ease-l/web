/**
 * Created by Valera_alt on 24-Aug-16.
 */
var ExampleApplication = React.createClass({
    render: function () {
        var imageId = "57bd9657fcfbb420e475f20e";
        axios.get('http://api.ease-l.xyz/Image/' + imageId + '/comment')
            .then(function (response) {
                var jsonobject = response.data.value;
                var div = document.createElement('li');
                div.className = "alert alert-success";
                div.appendChild(document.createTextNode(jsonobject.Name + "\n" + jsonobject.Text + "\n"));
                document.getElementById("comments").appendChild(div);
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