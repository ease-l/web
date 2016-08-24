var ExampleApplication = React.createClass({

    render: function () {
        var message = 'Response write in console';
        axios.get('http://localhost:51715/Project')
            .then(function (response) {
                console.log(response);
                var con = document.getElementById("container");
                con.textContent = response.data.value;
            })
            .catch(function (error) {
                var con = document.getElementById("container");
                con.textContent = error.toString();
            });
        return <p>{message}</p>;
    }

});

var start = new Date().getTime();
ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start}/>,
    document.getElementById('container')
);
