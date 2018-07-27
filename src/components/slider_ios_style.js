import React from "react";

//Styles
import bClassNames from "./bootstrap-classnames";
import "./slider_ios_style.css";

const SliderIOSStyle = (props) => {
	return (
		<div id="slider" className={bClassNames.slider}>
			{/* <div class="row">
				<div class="col-2">
					<FontAwesomeIcon
						icon={faVolumeOff}
						className={bClassNames.faIconClass}
						style={bClassNames.faIconStyle}
					/>
				</div>
				<div class="col"> */}
			<div className={"container slidecontainer"}>
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
			{/* </div>

				<div class="col-2">
					<FontAwesomeIcon
						icon={faVolumeUp}
						className={bClassNames.faIconClass}
						style={bClassNames.faIconStyle}
					/>
				</div>
			</div> */}
		</div>
	);
};

export default SliderIOSStyle;
