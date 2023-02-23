import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Content from "./components/Content";
import reactText from "./components/reactText";

function App() {
  return (
    <div className="App">
      <Heading name="Isac"
               color="gray"
               fontSize="30px"
               textAlign="center"
      />
        <Paragraph />
        <Content width="120px"
                 textDecoration="none"
                 color="darkblue"
                 height="35px"
        />
        <reactText color="black"/>

    </div>
  );
}

export default App;
