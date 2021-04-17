import markDownContext from "./context/markdownContext";
import MarkdownSanitized from "./components/MarkdownSanitized";
import RawInputArea from "./components/RawInputArea";
import useMarkDownEditor from "./hooks/useMarkdownEditor";

function App() {
	const contextValue = useMarkDownEditor();

	return (
		<markDownContext.Provider value={contextValue}>
			<div className="flex flex-col w-screen h-screen font-lato">
				<div className="relative flex items-center w-full p-4">
					<span className="flex-grow text-4xl text-center">Markdown Editor</span>
					<a className="absolute right-10" href="http://www.markdownguide.org/basic-syntax/" target="__blank">see basic syntax</a>
				</div>
				<div className="flex w-full h-full p-4">
					<RawInputArea />
					<MarkdownSanitized />
				</div>
			</div>
		</markDownContext.Provider>
	);
}

export default App;
