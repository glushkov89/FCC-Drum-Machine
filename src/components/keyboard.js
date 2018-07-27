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
			<div class="col">
				<Button
					key={obj.key}
					data={obj}
					power={props.power}
					clickHandler={props.createSoundPlay(obj.key.toUpperCase())}
				/>
			</div>
		);
	});

	return (
		<div className={bClassNames.keyboard}>
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
