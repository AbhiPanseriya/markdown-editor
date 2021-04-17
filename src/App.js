import markDownContext from "./context/markdownContext";
import MarkdownSanitized from "./components/MarkdownSanitized";
import RawInputArea from "./components/RawInputArea";
import useMarkDownEditor from "./hooks/useMarkdownEditor";
import { useRef } from 'react';

function App() {
	const contextValue = useMarkDownEditor();
	const result = useRef(null);
	const textarea = useRef(null);
	const onScrollTextArea = (mousePos) => {
		if(!mousePos) return;
		const percent = textarea.current.scrollTop / (textarea.current.scrollHeight - textarea.current.offsetHeight);
		result.current.scrollTo({
			top: (result.current.scrollHeight - result.current.offsetHeight) * percent
		})
	}
	const onScrollResult = (mousePos) => {
		if(!mousePos) return;
		const percent = result.current.scrollTop / (result.current.scrollHeight - result.current.offsetHeight);
		textarea.current.scrollTo({
			top: (textarea.current.scrollHeight - textarea.current.offsetHeight) * percent
		})
	}

	return (
		<markDownContext.Provider value={contextValue}>
			<div className="flex flex-col w-screen h-screen font-lato">
				<div className="relative flex items-center w-full p-4">
					<span className="flex-grow text-4xl text-center">Markdown Editor</span>
					<a className="absolute right-10" href="http://www.markdownguide.org/basic-syntax/" target="__blank">see basic syntax</a>
				</div>
				<div className="flex w-full h-full p-4">
					<RawInputArea textarea={textarea} scroll={onScrollTextArea}/>
					<MarkdownSanitized result={result} scroll={onScrollResult}/>
				</div>
			</div>
		</markDownContext.Provider>
	);
}

export default App;
