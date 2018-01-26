import React, { Component } from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <GifItem key={video.etag} 
						video={video} 
						onClick={() => props.selectAVideo(video.id.videoId)}/>
	});

	return (
		<ul>{videoItems}</ul>
	);
};

export default GifList

