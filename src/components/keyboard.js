import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

//Components
import Button from "./button";

const Keyboard = (props) => {
	const keyPressEventHandler = (key, e) => console.log(`"${key}" key pressed`);
	const makeClickEventHandler = (button) => {
		return () => console.log(`"${button}" button clicked`);
	};

	const keyboardButtons = props.sounds.map((obj) => (
		<Button
			key={obj.key}
			btn={obj.key}
			play={props.control}
			clkEvntHndlr={makeClickEventHandler(obj)}
		/>
	));
	const keys = props.sounds.map((obj) => obj.key);

	return (
		<div>
			<h3>Keyboard</h3>
			<KeyboardEventHandler
				handleKeys={keys}
				onKeyEvent={keyPressEventHandler}
			/>
			{keyboardButtons}
		</div>
	);
};

export default Keyboard;
