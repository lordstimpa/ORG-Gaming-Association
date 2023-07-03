import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import styled from "styled-components"
import Hero from "./Hero"
import Nav from "./Nav"
import Soldier from "./assets/gamer.jpg";

const Body = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Body image={Soldier}>
      <Router>
      <Nav />
        <Routes>
          <Route exact path="/" element={
            <Hero />
          } 
          />
        </Routes>
      </Router>
    </Body>
  )
}

export default App
