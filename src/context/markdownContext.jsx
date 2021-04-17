import React from "react";

const markdownContext = React.createContext({
	text: "",
	handleChangeRawInputedText: () => {},
	getMarkDownAsHTMLOutput: () => {},
});

export default markdownContext;
