import React, { Component } from 'react';

const GifItem = (props) => {
	return (
		<li>
			<p>{props.snippet}</p>
		</li>
	)
};

export default GifItem;