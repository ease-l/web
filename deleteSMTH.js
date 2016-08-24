var CommentBox = React.createClass({
    clicked: function () {
        /*var names = ["Email", "Password"];
         var values = ["test.email@qwert.com", "Qwert1234"]*/
        var id = document.getElementById("id").value;
        axios({
                method: 'delete',
                url: 'http://localhost:51715/Project/' + id ,
                data: {
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
            <button onClick={this.clicked.bind(this)}>Delete</button>
        );
    }
});
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('test')
);