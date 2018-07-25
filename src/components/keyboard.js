import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

//Components
import Button from "./button";

const Keyboard = (props) => {
	console.log(props);

	const keyPressEventHandler = (key, e) => console.log(`"${key}" key pressed`);
	const clickEventHandler = (button) => {
		return () => console.log(`"${button}" button pressed`);
	};

	const keyboardButtons = props.keys.map((item) => (
		<Button key={item} btn={item} clkEvntHndlr={clickEventHandler(item)} />
	));
	return (
		<div>
			<h3>Keyboard</h3>
			<KeyboardEventHandler
				handleKeys={props.keys}
				onKeyEvent={keyPressEventHandler}
			/>
			{keyboardButtons}
		</div>
	);
};

export default Keyboard;
