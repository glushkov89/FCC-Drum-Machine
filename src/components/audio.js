import React from "react";

const Audio = (props) => {
	//	console.log(props);
	return props.power ? (
		<audio
			className={"clip"}
			id={props.data.key.toUpperCase()}
			src={`${props.data.filename}`}
			type={"audio/mp3"}
			//controls
		>
			<p>HTML5 audio is not supported on your browser</p>
		</audio>
	) : null;
};

export default Audio;
