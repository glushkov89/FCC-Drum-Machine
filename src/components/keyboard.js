import React from "react";
//import KeyboardEventHandler from "react-keyboard-event-handler";

//Components
import Button from "./button";

const Keyboard = (props) => {
	const handleClick = (key) => props.playSound(key);

	const keyboardButtons = props.sounds.map((obj) => (
		<Button
			key={obj.key}
			data={obj}
			power={props.power}
			clickHandler={handleClick(obj.key.toUpperCase())}
		/>
	));

	return <div>{keyboardButtons}</div>;
};

export default Keyboard;
