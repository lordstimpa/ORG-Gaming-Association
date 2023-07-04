import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import styled from "styled-components"
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
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
            <div>
            <Hero />
            <About />
            </div>
          } 
          />
        </Routes>
      </Router>
    </Body>
  )
}

export default App
