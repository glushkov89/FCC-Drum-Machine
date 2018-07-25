import React from "react";

const Button = (props) => {
	console.log(props);
	return (
		<div>
			<button onClick={props.clkEvntHndlr}>{props.btn.toUpperCase()}</button>
		</div>
	);
};

export default Button;
