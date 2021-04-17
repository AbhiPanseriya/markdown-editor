import React, { useContext, useState, useRef, useEffect } from "react";
import markdownContext from "../context/markdownContext";

function RawInputArea() {
    const { text, handleChangeRawInputedText} = useContext(markdownContext);
    const [displayHeader, setDisplayheader] = useState(true);
    
    useEffect(() => {
        if(!displayHeader)
            textarea.current.focus();
    }, [ displayHeader])
    const textarea = useRef(null);
    
    const checkText = () => {
        if(!text) setDisplayheader(true);
    }
    return (
        <div className="w-1/2 h-full border-r-2">
            {displayHeader ? (
                <div className="text-4xl text-center text-gray-500 cursor-pointer py-52" onClick={() => setDisplayheader(false)}>Enter your Text Here:</div>
            ) : (
                <textarea className="w-full h-full outline-none" ref={textarea} value={text} onChange={e => handleChangeRawInputedText(e.target.value)} onBlur={() => checkText()}></textarea>
            )}
        </div>
    )
}

export default RawInputArea
