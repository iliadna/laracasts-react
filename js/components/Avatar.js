var Avatar = React.createClass({

	getDefaultProps: function() {
		return {
			path: "5108055-hello-kitty-images.jpg"
		};
	},

	render: function() {
		return (
			<div>
				<a href={this.props.path}>
					<img src={this.props.path} />
				</a>
			</div>
		);
	}
});

React.render(<Avatar path="download.jpeg" />, document.body);