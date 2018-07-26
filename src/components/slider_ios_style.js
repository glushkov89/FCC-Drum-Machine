import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

//Styles
import bClassNames from "./bootstrap-classnames";
import "./slider_ios_style.css";

const SliderIOSStyle = (props) => {
	return (
		<div className={bClassNames.slider}>
			<FontAwesomeIcon icon={faVolumeOff} />
			<div className={"slidecontainer"}>
				<input
					type="range"
					name="Volume"
					min="0"
					max="1.0"
					step="0.1"
					className={"slider"}
					value={props.currentVolume}
					onChange={(e) => props.adjustVolume(e.target.value)}
				/>
			</div>
			<FontAwesomeIcon icon={faVolumeUp} />
		</div>
	);
};

export default SliderIOSStyle;
