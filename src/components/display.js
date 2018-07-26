import React from "react";

//Styles
import bClassNames from "./bootstrap-classnames";

const Display = (props) => {
	return (
		<div id={"display"} className={bClassNames.display}>
			{props.filename}
		</div>
	);
};

export default Display;
