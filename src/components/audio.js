import React from "react";

const Audio = (props) => {
	return (
		<audio
			className={"clip"}
			id={props.data.key.toUpperCase()}
			src={`/sounds/${props.data.filename}`}
			type={"audio/mp3"}
			controls
		>
			<p>HTML5 audio is not supported on your browser</p>
		</audio>
	);
};

export default Audio;
