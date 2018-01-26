import React, { Component } from 'react';

const VideoPlayer = (props) => {
	const snippet = props.video.snippet;
	return (
		<div>
			<iframe 
				width="560" 
				height="315" 
				src={`https://www.youtube.com/embed/${props.video.id.videoId}`} 
				frameBorder="0"  
				allowFullScreen></iframe>
			<h1>{snippet.title}</h1>
			<p>{snippet.description}</p>
		</div>
	)
};

export default VideoPlayer;