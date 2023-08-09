import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
// Homepage
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";
// Membership
import Membership from "./components/Membership";
import MembershipInfo from "./components/MembershipInfo";
import BecomeMember from "./components/BecomeMember";
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
                <More />
              </div>
            }
          />
          <Route exact path="/membership" element={<Membership />} />
          <Route
            exact
            path="/membership/information"
            element={<Membership contentComponent={<MembershipInfo />} />} // Pass Information component as prop
          />
          <Route
            exact
            path="/membership/become-member"
            element={<Membership contentComponent={<BecomeMember />} />} // Pass BecomeMember component as prop
          />
        </Routes>
        <Footer />
      </Router>
    </Body>
  );
}

export default App;
