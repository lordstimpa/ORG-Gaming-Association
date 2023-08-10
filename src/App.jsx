import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
// Nav
import Nav from "./components/Nav";
// Homepage
import Hero from "./components/Hero";
import General from "./components/General";
import More from "./components/More";
// Membership
import Membership from "./components/Membership";
import MembershipInfo from "./components/MembershipInfo";
import BecomeMember from "./components/BecomeMember";
// About ORG
import AboutORG from "./components/AboutORG";
import History from "./components/History";
import Vision from "./components/Vision";
import Board from "./components/Board";
import Statutes from "./components/Statutes";
import AnnualReports from "./components/AnnualReports";
// Footer
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
                <General />
                <More />
              </div>
            }
          />
          <Route exact path="/membership" element={<Membership />} />

          <Route
            exact
            path="/membership/information"
            element={<Membership contentComponent={<MembershipInfo />} />}
          />

          <Route
            exact
            path="/membership/become-member"
            element={<Membership contentComponent={<BecomeMember />} />}
          />

          <Route exact path="/about" element={<AboutORG />} />

          <Route
            exact
            path="/about/history"
            element={<AboutORG contentComponent={<History />} />}
          />

          <Route
            exact
            path="/about/vision"
            element={<AboutORG contentComponent={<Vision />} />}
          />

          <Route
            exact
            path="/about/board"
            element={<AboutORG contentComponent={<Board />} />}
          />

          <Route
            exact
            path="/about/statutes"
            element={<AboutORG contentComponent={<Statutes />} />}
          />

          <Route
            exact
            path="/about/annual-reports"
            element={<AboutORG contentComponent={<AnnualReports />} />}
          />
        </Routes>
        <Footer />
      </Router>
    </Body>
  );
}

export default App;
