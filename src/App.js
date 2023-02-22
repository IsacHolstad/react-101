import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Heading name="Isac"
               color="gray"
               fontSize="30px"
               textAlign="center"
      />
        <Paragraph />

    </div>
  );
}

export default App;
