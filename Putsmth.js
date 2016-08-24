var CommentBox = React.createClass({
    clicked: function () {
        /*var names = ["Email", "Password"];
         var values = ["test.email@qwert.com", "Qwert1234"]*/
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        axios({
                method: 'put',
                url: 'http://localhost:51715/Project/' + id ,
                data: {
                    Name: name
                }
            }
        )
            .then(function (response) {
                alert(response);
            })
            .catch(function (error) {
                alert(error);
            });

    },
    render: function () {
        return (
            <button onClick={this.clicked.bind(this)}>Update</button>
        );
    }
});
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('test')
);