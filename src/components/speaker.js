import React from "react";

const Speaker = (props) => {
	if (props.play) {
		return (
			<div>
				<Sound
					url="/src/sounds/yamaha-a.mp3"
					autoLoad={true}
					autoPlay={true}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			</div>
		);
	} else {
		return <div />;
	}
};

export default Speaker;
