import React, { Component } from 'react';
import GifItem from './GifItem.js';

const GifList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <GifItem key={video.etag} snippet={video.snippet.publishedAt} />
	});

	return (
		<ul>{videoItems}</ul>
	);
};

export default GifList

