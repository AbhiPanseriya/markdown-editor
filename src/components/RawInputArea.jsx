import React, { useContext, useState, useEffect } from "react";
import markdownContext from "../context/markdownContext";

function RawInputArea({ textarea, scroll }) {
	const { text, handleChangeRawInputedText } = useContext(markdownContext);
	const [displayHeader, setDisplayheader] = useState(text ? false : true);
	const [mousePos, setMousePos] = useState();

	useEffect(() => {
		if (!displayHeader) textarea.current.focus();
	}, [displayHeader, textarea]);

	const checkText = () => {
		if (!text) setDisplayheader(true);
	};

	return (
		<div className="w-1/2 h-full border-r-2">
			{displayHeader ? (
				<div
					className="text-4xl text-center text-gray-500 cursor-pointer py-52"
					onClick={() => setDisplayheader(false)}
				>
					Enter your Text Here:
				</div>
			) : (
				<textarea
					onScroll={() => scroll(mousePos)}
					className="w-full h-full outline-none resize-none"
					ref={textarea}
					value={text}
					onChange={(e) => handleChangeRawInputedText(e.target.value)}
					onBlur={() => checkText()}
					onMouseEnter={(e) => setMousePos(true)}
					onMouseLeave={(e) => setMousePos(false)}
				></textarea>
			)}
		</div>
	);
}

export default RawInputArea;
