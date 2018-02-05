import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: ''}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({term: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onTermChange(this.state.term);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Search for:
				 	<input type="text" value={this.state.term} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Search" />
			</form>
		)
	}
}

export default SearchBar;