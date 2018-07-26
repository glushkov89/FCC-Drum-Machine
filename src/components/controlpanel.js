import React from "react";

const ControlPanel = (props) => {
	return (
		<div>
			<h3>Control panel</h3>
			<input
				type="checkbox"
				name="Power"
				value="ON_OFF"
				onClick={props.togglePower}
			/>Power
			<input
				type="range"
				name="Volume"
				min="0"
				max="1.0"
				step="0.1"
				value={props.currentVolume}
				onChange={(e) => props.adjustVolume(e.target.value)}
			/>
			Volume
		</div>
	);
};

export default ControlPanel;
