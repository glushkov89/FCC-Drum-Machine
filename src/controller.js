import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

class Controller extends Component {
	state = {};
	keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

	render() {
		return (
			<div>
				<Keyboard keys={this.keys} />
				<ControlPanel />
				<Display id={"display"} data={"Display"} />
			</div>
		);
	}
}

export default Controller;
