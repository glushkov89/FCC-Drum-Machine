import React from "react";

//Styles
import "./switch_ios_style.css";
import bClassNames from "./bootstrap-classnames";

//Switch from Jesse Couch https://codepen.io/designcouch/pen/sDAvk?editors=1000

const SwitchIOSStyle = (props) => {
	return (
		<div id="switch-container" className={bClassNames.switch}>
			{/* <input
				type="checkbox"
				name="Power"
				value="ON_OFF"
				onClick={props.power}
			/> */}
			<div id="toggles">
				<input
					type="checkbox"
					name="checkbox1"
					id="checkbox1"
					className="ios-toggle"
					onClick={props.power}
					defaultChecked
				/>
				<label
					htmlFor="checkbox1"
					className="checkbox-label"
					data-off="off"
					data-on="on"
				/>
			</div>
		</div>
	);
};

export default SwitchIOSStyle;
