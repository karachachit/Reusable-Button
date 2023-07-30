import "./App.css";
import Button from "./UI/Button";

function App() {
  return (
    <div className="App">
      <Button variant="outlined">outlined </Button>
      <Button variant="contained">contained</Button>
      <Button variant="warning">warning</Button>
      <Button variant="danger">danger</Button>
    </div>
  );
}

export default App;
