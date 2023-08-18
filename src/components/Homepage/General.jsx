import styled from "styled-components";
import { Link } from "react-router-dom";
import Org from "../../assets/org.png";
import OrgHotShot from "../../assets/orghotshot.png";

const Body = styled.div`
  position: relative;
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1fr 550px 550px 1fr;
  grid-template-rows: 5rem fit-content(100px) 1fr 4rem;
  background: #eaeaea;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.3;
  }

  & .Title {
    z-index: 1;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    margin-bottom: 1rem;

    & h1 {
      text-align: center;
      color: #f30067;
      font-size: 5rem;
    }
  }

  & .Text {
    z-index: 1;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin: 1rem;

    & div {
      margin-bottom: 1rem;
    }

    & h2 {
      padding-bottom: 1rem;
      color: #f30067;
    }

    & p {
      padding: 0.2rem 1rem;
    }

    & .LinkPage {
      text-decoration: none;
      font-weight: 600;
      color: #444444;
      padding: 0.2rem 1rem;

      :hover {
        color: #f30067;
      }
    }
  }

  & .Picture {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    display: flex;
    justify-content: center;
    margin: 2rem;
    z-index: 1;
    border: 2px solid #f30067;
    border-radius: 2rem;
    overflow: hidden;

    & img {
      width: 100%;
      object-fit: cover;
      transform: scale(1.13);
    }
  }

  @media only screen and (max-width: 1170px) {
  }
`;

const General = () => {
  return (
    <Body backgroundImg={Org}>
      <div className="Title">
        <h1>Allmänt om ORG</h1>
      </div>

      <div className="Text">
        <div>
          <h2>Spelförening</h2>
          <p>
            ORG grundades år 2009 och har under en längre period endast bestått
            av ett fåtal medlemmar som haft kul tillsammans. Nu har vi valt att
            ta ORG till nästa nivå!
          </p>
          <p>
            Genom att göra ORG till en äkta spelförening öppnar vi nu upp
            portarna för fler medlemmar för att ta del av gemenskapen och allt
            roligt som kommer längs resan.
          </p>
          <Link to="/about" className="LinkPage">
            Mer om ORG!
          </Link>
        </div>
        <div>
          <h2>Medlemskap</h2>
          <p>
            Som gratismedlem så bidrar man till organisationen mer än vad man
            tror. Med hjälp av statligt subventionerade bidrag så får
            organisationen möjlighet till att anordna större event och
            turneringar.
          </p>
          <p>
            För att man som medlem ska kunna delta på event och turneringar så
            behöver man betala en avgift på 150kr som täcker ett helt år av
            evenemang som ORG har att erbjuda.
          </p>
          <Link to="/membership" className="LinkPage">
            Mer om medlemskap!
          </Link>
        </div>
        <div>
          <h2>Event</h2>
          <p>
            Vi kommer att erhålla event och turneringar året om, framförallt när
            majoriteten av medlemmarna har det ledigt från jobb och studier.
          </p>
          <Link to="/event" className="LinkPage">
            Mer om event!
          </Link>
        </div>
      </div>
      <div className="Picture">
        <img src={OrgHotShot}></img>
      </div>
    </Body>
  );
};

export default General;
