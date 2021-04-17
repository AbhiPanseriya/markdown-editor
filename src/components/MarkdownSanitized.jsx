import React, { useContext } from "react";
import markdownContext from "../context/markdownContext";

function MarkdownSanitized() {
	const { text, getMarkDownAsHTMLOutput } = useContext(markdownContext);
	return (
    <div className="w-1/2 h-full pl-4">
        {text ? getMarkDownAsHTMLOutput() : (
            <div className="text-4xl text-center text-gray-500 mt-52">Output:</div>
        )}
        
    </div>
    );
}

export default MarkdownSanitized;
