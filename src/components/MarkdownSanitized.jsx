import React, { useContext, useState } from "react";
import markdownContext from "../context/markdownContext";

function MarkdownSanitized({ result, scroll }) {
	const { text, getMarkDownAsHTMLOutput } = useContext(markdownContext);
	const [mousePos, setMousePos] = useState();

	return (
		<div
			className="w-1/2 h-[89vh] pl-4 overflow-auto"
			onScroll={() => scroll(mousePos)}
			onMouseEnter={(e) => setMousePos(true)}
			onMouseLeave={(e) => setMousePos(false)}
			ref={result}
		>
			{text ? (
				getMarkDownAsHTMLOutput()
			) : (
				<div className="text-4xl text-center text-gray-500 mt-52">
					Output:
				</div>
			)}
		</div>
	);
}

export default MarkdownSanitized;
