import React from "react";

//Styles
import bClassNames from "./bootstrap-classnames";

const SliderIOSStyle = (props) => {
	return (
		<div className={bClassNames.slider}>
			<input
				type="range"
				name="Volume"
				min="0"
				max="1.0"
				step="0.1"
				value={props.currentVolume}
				onChange={(e) => props.adjustVolume(e.target.value)}
			/>
		</div>
	);
};

export default SliderIOSStyle;
