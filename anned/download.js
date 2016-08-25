var CommentBox = React.createClass({
    clicked: function () {
        /*var names = ["Email", "Password"];
         var values = ["test.email@qwert.com", "Qwert1234"]*/
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "http://localhost:51715/Project");
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", "Name");
        hiddenField.setAttribute("value", "Test");
        form.appendChild(hiddenField);;
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
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