import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
// Nav
import Nav from "./components/Navigation/Nav";
// Homepage
import Hero from "./components/Homepage/Hero";
import General from "./components/Homepage/General";
import More from "./components/Homepage/More";
// Information Subpage
import DynamicComponent from "./components/Subpages/DynamicComponent";
// About ORG
import Information from "./components/Subpages/Sub-Information";
import History from "./components/Subpages/SubSub-History";
import Vision from "./components/Subpages/SubSub-Vision";
import Board from "./components/Subpages/SubSub-Board";
import Statutes from "./components/Subpages/SubSub-Statutes";
import AnnualReports from "./components/Subpages/SubSub-AnnualReports";
// Membership
import Membership from "./components/Subpages/Sub-Membership";
import MembershipInfo from "./components/Subpages/SubSub-MembershipInfo";
import BecomeMember from "./components/Subpages/SubSub-BecomeMember";
// Footer
import Footer from "./components/Footer/Footer";

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

          <Route
            exact
            path="/about"
            element={<DynamicComponent contentComponent={<Information />} />}
          />

          <Route
            exact
            path="/about/history"
            element={<DynamicComponent contentComponent={<History />} />}
          />

          <Route
            exact
            path="/about/vision"
            element={<DynamicComponent contentComponent={<Vision />} />}
          />

          <Route
            exact
            path="/about/board"
            element={<DynamicComponent contentComponent={<Board />} />}
          />

          <Route
            exact
            path="/about/statutes"
            element={<DynamicComponent contentComponent={<Statutes />} />}
          />

          <Route
            exact
            path="/about/annual-reports"
            element={<DynamicComponent contentComponent={<AnnualReports />} />}
          />

          <Route
            exact
            path="/membership"
            element={<DynamicComponent contentComponent={<Membership />} />}
          />

          <Route
            exact
            path="/membership/information"
            element={<DynamicComponent contentComponent={<MembershipInfo />} />}
          />

          <Route
            exact
            path="/membership/become-member"
            element={<DynamicComponent contentComponent={<BecomeMember />} />}
          />
        </Routes>

        <Footer />
      </Router>
    </Body>
  );
}

export default App;
