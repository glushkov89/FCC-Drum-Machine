import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

class Controller extends Component {
	state = {
		on: true,
		filename: "",
		volume: 0.5
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

	createSoundPlay = (key) => {
		return () => {
			if (this.state.on) {
				const sound = document.getElementById(key);
				sound.volume = this.state.volume;
				let filename = sound.src.substring(sound.src.lastIndexOf("/") + 1);
				this.setState({ filename: `${sound.id} - ${filename}` });
				//console.log(sound);
				sound.play();
			}
		};
	};

	adjustVolume = (value) => {
		this.setState({ volume: value });
	};

	togglePower = () => {
		this.setState({ on: this.state.on ? false : true, filename: "" });
	};

	addKeyboardEventListeners = () => {
		const keys = this.sounds.map((obj) => obj.key);
		console.log(keys);
	};

	render() {
		//console.log(this.state);
		return (
			<div>
				<Keyboard
					sounds={this.sounds}
					createSoundPlay={this.createSoundPlay}
					power={this.state.on}
				/>
				<ControlPanel
					adjustVolume={this.adjustVolume}
					togglePower={this.togglePower}
					currentVolume={this.state.volume.toString()}
				/>
				<Display filename={this.state.filename} />
			</div>
		);
	}
}

export default Controller;
