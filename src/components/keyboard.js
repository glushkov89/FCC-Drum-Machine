import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

//Components
import Button from "./button";

//Styles
import bClassNames from "./bootstrap-classnames";

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
			/>
		);
	});

	return (
		<div className={bClassNames.controller}>
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
