import "./App.css";
import Summary from "./components/Summary";
import Modal from "./contexts/Modal";

function App() {
  return (
    <>
      <Modal>
        <div className="App">
          <Summary />
        </div>
      </Modal>
    </>
  );
}

export default App;
