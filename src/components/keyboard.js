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
			<div className="col-4">
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
			<div className="row">{keyboardButtons.slice(0, 3)}</div>
			<div className="row">{keyboardButtons.slice(3, 6)}</div>
			<div className="row">
				{keyboardButtons.slice(6, keyboardButtons.length + 1)}
			</div>
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
