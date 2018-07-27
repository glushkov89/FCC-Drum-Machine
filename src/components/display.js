import React from "react";

//Styles
import bClassNames from "./bootstrap-classnames";

const Display = (props) => {
	return (
		<div id="display" className={bClassNames.display}>
			<div className="container text-center">{props.filename || "Display"}</div>

			{/* <div className="col align-self-center">{props.filename || "Display"}</div> */}
		</div>
	);
};

export default Display;
