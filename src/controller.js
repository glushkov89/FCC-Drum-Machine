import React, { Component } from "react";

//Components
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ControlPanel from "./components/controlpanel";

//Styles
import bClassNames from "./components/bootstrap-classnames";

class Controller extends Component {
	state = {
		on: true,
		filename: "",
		volume: 0.5
	};

	sounds = [
		{
			key: "q",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
		},
		{
			key: "w",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
		},
		{
			key: "e",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
		},
		{
			key: "a",
			filename:
				"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
		},
		{
			key: "s",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
		},
		{
			key: "d",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
		},
		{
			key: "z",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
		},
		{
			key: "x",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
		},
		{
			key: "c",
			filename: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
		}
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
			<div className={bClassNames.controller}>
				<Display filename={this.state.filename} />
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
			</div>
		);
	}
}

export default Controller;
