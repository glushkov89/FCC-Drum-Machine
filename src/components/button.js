import React from "react";

const Button = (props) => {
	console.log(props.play);
	const name = props.btn.toUpperCase();
	return (
		<div>
			<div className={"drum-pad"} id={name} onClick={props.clkEvntHndlr}>
				{name}
				{props.play.key === props.btn ? (
					<audio
						src={`/sounds/${props.play.filename}`}
						type={"audio/mp3"}
						className={"clip"}
						controls
						autoPlay
						volume={props.play.volume}
					>
						<p>HTML5 audio is not supported on your browser</p>
					</audio>
				) : null}
			</div>
		</div>
	);
};

export default Button;
