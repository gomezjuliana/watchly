import React, { Component } from 'react';

const GifItem = (props) => {
	const snippet = props.video.snippet;
	return (
		<li>
			<p onClick={props.onClick}>{snippet.title}</p>
			<p>{snippet.description}</p>
			<img src={snippet.thumbnails.default.url} />
		</li>
	)
};

export default GifItem;