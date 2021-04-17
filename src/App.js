import markDownContext from "./context/markdownContext";
import MarkdownSanitized from "./components/MarkdownSanitized";
import RawInputArea from "./components/RawInputArea";
import useMarkDownEditor from "./hooks/useMarkdownEditor";

function App() {
	const contextValue = useMarkDownEditor();

	return (
		<markDownContext.Provider value={contextValue}>
			<div className="flex flex-col w-screen h-screen font-lato">
				<div className="w-full py-4 text-4xl text-center">Markdown Editor</div>
				<div className="flex w-full h-full p-4">
					<RawInputArea />
					<MarkdownSanitized />
				</div>
			</div>
		</markDownContext.Provider>
	);
}

export default App;
