import './App.css';
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Content from "./components/Content";
import ReactText from "./components/ReactText";
//import Counter from "./components/Voter";
const proudcts = [
    {id: 0, name:"Milk", price: "10000$"},
    {id:1, name: "Mjølk", price: "10000$"},
    {id:2, name:"Candy", price: "10000$"},
    {id: 3, name:"Bread", price: "10000$"},
    {id: 4, name:"Spray", price: "10000$"},
    {id: 5, name:"PepsiMax", price: "1000434330$"}

];

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
      <h3>Jhonny Votes:</h3>
      <img className={"johnny-img"}
             src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
             alt="img of some guy"/>
        <button>Vote For Jhonny</button>
      <h3>Morten Votes:</h3>
      <img className={"morten-img"}
             src={"https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="}
             alt="second img of some guy"/>
        <button>Vote For Morten</button>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
          <h4>Day 4 of React</h4>
      <hr/>
            <ul>
                {proudcts.map((product => (
                    <li key={product.id}>
                        {product.name}
                        {product.price}
                    </li>
                )))}
            </ul>
    </div>
  );
}

export default App;
