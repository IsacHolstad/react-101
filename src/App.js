import './App.css';
import React, {useState} from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Content from "./components/Content";
import Voter from "./components/Voter";

const proudcts = [
    {id: 0, name:"Milk", price: "10000$"},
    {id:1, name: "Mjølk", price: "10000$"},
    {id:2, name:"Candy", price: "10000$"},
    {id: 3, name:"Bread", price: "10000$"},
    {id: 4, name:"Spray", price: "10000$"},
    {id: 5, name:"PepsiMax", price: "1000434330$"}
];

//here you can choose between showing data based on if the user is logged in
//if isLoggedIn = true it will show the data
//if isLoggedIn = false it will only show the login form

let isLoggedIn = true;

let content;

if (isLoggedIn) {
    content = <main>
        <h2 className="h2ProfileHeading">profile</h2>
        <ul className="profileData">
            <li>Name: isac</li>
            <li>Number: 4939342</li>
            <li>Mail: isac@gmail.ai</li>
        </ul>
    </main>
} else{
    content =<h6>Login Form</h6>
}

function App() {
    const [jackVotes, setJackVotes] = useState(0);
    const [mortenVotes, setMortenVotes] = useState(0);

    function handleVotes(name) {
        if(name === "jack") {
            setJackVotes(jackVotes + 1);
        }
        if (name === "morten") {
            setMortenVotes(mortenVotes + 1);
        }
    }

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
        <hr/>
      <h3>Jhonny Votes: {jackVotes}</h3>
      <img className={"johnny-img"}
             src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
             alt="img of some guy"/>
        <Voter handleVotes={handleVotes} name="jack"/>
      <h3>Morten Votes: {mortenVotes}</h3>
      <img className={"morten-img"}
             src={"https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="}
             alt="second img of some guy"/>
        <Voter handleVotes={handleVotes} name="morten"/>
      <hr/>
          <h4>Day 4 of React</h4>
      <hr/>
            <div className="ul">
                {proudcts.map((product => (
                    <li className="li" key={product.id}>
                        {product.name}
                        {product.price}
                    </li>
                )))}
            </div>
      <hr/>
        {content}
    </div>
  );
}

export default App;
