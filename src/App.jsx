import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const Body = styled.div``;

function App() {
  return (
    <Body>
      <Router>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Hero />
                <About />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Body>
  );
}

export default App;
