import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

//Components
import Button from "./button";

const Keyboard = (props) => {
	const keys = [];
	const keyboardButtons = props.sounds.map((obj) => {
		keys.push(obj.key);
		return (
			<Button
				key={obj.key}
				data={obj}
				power={props.power}
				clickHandler={props.createSoundPlay(obj.key.toUpperCase())}

				// onKeyDown={this.onKeyPressed}
				// tabIndex="0"
			/>
		);
	});

	return (
		<div>
			{keyboardButtons}
			<KeyboardEventHandler
				handleKeys={keys}
				onKeyEvent={(key, e) => {
					props.createSoundPlay(key.toUpperCase())();
				}}
			/>
		</div>
	);
};

export default Keyboard;
