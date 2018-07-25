import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

class Controller extends Component {
	state = {
		control: {
			key: "",
			filename: "",
			volume: ""
		},
		sounds: [
			{ key: "q", filename: "yamaha-a.mp3" },
			{ key: "w", filename: "yamaha-a6.mp3" },
			{ key: "e", filename: "yamaha-a7.mp3" },
			{ key: "a", filename: "yamaha-ab.mp3" },
			{ key: "s", filename: "yamaha-adim.mp3" },
			{ key: "d", filename: "yamaha-am.mp3" },
			{ key: "z", filename: "yamaha-am6.mp3" },
			{ key: "x", filename: "yamaha-am7.mp3" },
			{ key: "c", filename: "yamahfingerpluck.mp3" }
		]
	};

	//playSound doesnt work
	playSound = (filename) => {
		this.setState({ play: true, filename });
	};

	control = this.state.control;

	render() {
		//	this.playSound("yamahfingerpluck.mp3");
		console.log(this.state);
		return (
			<div>
				<Keyboard sounds={this.state.sounds} control={this.state.control} />
				<ControlPanel />
				<Display
					id={"display"}
					data={
						this.state.control.filename
							? this.state.control.filename
							: "Display"
					}
				/>
			</div>
		);
	}
}

export default Controller;
