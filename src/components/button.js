import React from "react";

//Components
import Audio from "./audio";

const Button = (props) => {
	//	console.log(props);
	return (
		<div onClick={props.clickHandler}>
			<div className={"drum-pad"} id={props.data.filename}>
				{props.data.key.toUpperCase()}
				<Audio data={props.data} power={props.power} />
			</div>
		</div>
	);
};

export default Button;
