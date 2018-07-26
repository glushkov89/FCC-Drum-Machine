import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

class Controller extends Component {
	state = {
		on: true,
		key: "",
		filename: "",
		volume: 0.2
	};

	sounds = [
		{ key: "q", filename: "yamaha-a.mp3" },
		{ key: "w", filename: "yamaha-a6.mp3" },
		{ key: "e", filename: "yamaha-a7.mp3" },
		{ key: "a", filename: "yamaha-ab.mp3" },
		{ key: "s", filename: "yamaha-adim.mp3" },
		{ key: "d", filename: "yamaha-am.mp3" },
		{ key: "z", filename: "yamaha-am6.mp3" },
		{ key: "x", filename: "yamaha-am7.mp3" },
		{ key: "c", filename: "yamahfingerpluck.mp3" }
	];

	playSound = (key) => {
		return () => {
			const sound = document.getElementById(key);
			sound.volume = this.state.volume;
			this.setState({ filename: sound.src });
			console.log(sound);
			//sound.play();
		};
	};

	render() {
		//		console.log(this.state);
		return (
			<div>
				<Keyboard sounds={this.sounds} playSound={this.playSound} />
				<ControlPanel />
				<Display filename={this.state.filename} />
			</div>
		);
	}
}

export default Controller;
