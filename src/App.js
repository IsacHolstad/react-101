import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Content from "./components/Content";
import ReactText from "./components/ReactText";
import VoteForJhonny from "./components/VoteForJhonny";
import VoteForMorten from"./components/VoteForMorten"

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
        <img className={"johnny-img"}
             src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
             alt="img of some guy"/>
        <VoteForJhonny/>

        <img className={"morten-img"}
             src={"https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="}
             alt="second img of some guy"/>
        <VoteForMorten/>
    </div>
  );
}

export default App;
