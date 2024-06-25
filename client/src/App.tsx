import Form from "./components/Form";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <Form />
      </div>
      <div className="col-span-1 bg-dark-gray min-h-screen"></div>
    </div>
  );
}

export default App;
