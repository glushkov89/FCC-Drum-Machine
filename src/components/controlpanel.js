import React from "react";

//Components
import SwitchIOSStyle from "./switch_ios_style";
import SliderIOSStyle from "./slider_ios_style";

//Styles
import bClassNames from "./bootstrap-classnames";

const ControlPanel = (props) => {
	return (
		<div className={bClassNames.controlpanel} id={"control-panel"}>
			<SliderIOSStyle {...props} />
			<SwitchIOSStyle power={props.togglePower} />
		</div>
	);
};

export default ControlPanel;
