import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const useMarkDownEditor = () => {
    const [text, setText] = useState(localStorage.getItem('text') || '');
    const handleChangeRawInputedText = (text) => {
        setText(text);
        localStorage.setItem('text', text);
    }
    const getMarkDownAsHTMLOutput = () => {
        return <ReactMarkdown children={text} />
    }

    return {text, handleChangeRawInputedText, getMarkDownAsHTMLOutput}
}


export default useMarkDownEditor;