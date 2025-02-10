import Form from "./components/Form";
import DownloadButton from "./components/template/DownloadButton";
import ResumeTemplate from "./components/template/ResumeTemplate";

function App() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="col-span-1 overflow-y-auto">
        <Form />
      </div>
      <div className="col-span-1 bg-dark-gray min-h-screen flex flex-col justify-center items-center">
        <DownloadButton />
        <ResumeTemplate />
      </div>
    </div>
  );
}

export default App;
