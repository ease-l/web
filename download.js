var CommentBox = React.createClass({
    clicked: function () {
        /*var names = ["Email", "Password"];
         var values = ["test.email@qwert.com", "Qwert1234"]*/
        var name = document.getElementById("name").value;
        axios({
                method: 'post',
                url: 'http://localhost:51715/Project' ,
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
            <button onClick={this.clicked.bind(this)}>Add</button>
        );
    }
});
ReactDOM.render(
    <CommentBox/>,
    document.getElementById('test')
);