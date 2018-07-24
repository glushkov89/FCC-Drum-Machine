import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

class Controller extends Component {
	state = {};

	render() {
		return (
			<div>
				<Keyboard />
				<ControlPanel />
				<Display id={"display"} data={"Display"} />
			</div>
		);
	}
}

export default Controller;
