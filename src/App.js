import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { app } = useSelector((state) => {
    return state.app;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Obesevable</h1>
        <h4>Reading this from the Redux Store: {app}</h4>
      </header>
    </div>
  );
}

export default App;
