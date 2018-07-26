import React from "react";

//Components
import Audio from "./audio";

//Styles
import bClassNames from "./bootstrap-classnames";

const Button = (props) => {
	//	console.log(props);
	return (
		<div className={bClassNames.button} onClick={props.clickHandler}>
			<div className={"drum-pad"} id={props.data.filename}>
				{props.data.key.toUpperCase()}
				<Audio data={props.data} power={props.power} />
			</div>
		</div>
	);
};

export default Button;
