import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Content from "./components/Content";
import ReactText from "./components/ReactText";

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
        <ReactText
            color="black"
            textAlign="center"
        />
        <hr/>
        <img className={"johnny-img"} src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="img of some guy"/>


    </div>
  );
}

export default App;
