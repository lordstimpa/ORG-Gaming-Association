import { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHandPointDown } from "react-icons/fa";
import Org from "../assets/org-rasta.png";

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eaeaea;

  & .Parent1 {
    display: flex;
    justify-content: center;

    & .PointerContainer {
      position: absolute;
      top: 91vh;
      z-index: 1;

      & .Pointer {
        font-size: 2em;
        color: #444444;
        padding: 0.2em;
        -webkit-animation: AnimatePointer 2s ease infinite;
        animation: AnimatePointer 2s ease infinite;
        transition: 0.1s ease-in-out;

        :hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }

      @-webkit-keyframes AnimatePointer {
        0% {
          margin-top: 0.5em;
        }
        50% {
          margin-top: 0em;
        }
        100% {
          margin-top: 0.5em;
        }
      }

      @keyframes AnimatePointer {
        0% {
          margin-top: 0.5em;
        }
        50% {
          margin-top: 0em;
        }
        100% {
          margin-top: 0.5em;
        }
      }
    }

    & .Bubble {
      position: absolute;
      top: 90vh;
      width: 300px;
      height: 300px;
      background: #eaeaea;
      border-radius: 50%;
      z-index: -1;
    }
  }

  & .LinkPage {
    text-decoration: none;
    color: #00d1cd;
  }

  & .Parent2 {
    display: grid;
    grid-template-columns: 1fr 500px 550px 1fr;
    grid-template-rows: 4em repeat(3, auto) 4em;
    grid-gap: 2em;
    z-index: 3;

    & .Text,
    .Links,
    .Picture {
      color: #444444;
    }

    & .Text,
    .Links {
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
        rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    & h1 {
      color: #00d1cd;
    }

    & .Text {
      grid-column: 2 / 3;
      grid-row: 2 / 5;
    }

    & .Text > div > * {
      padding: 0.5rem;
    }

    & .Text > div:not(:last-child) {
      padding-bottom: 1rem;
      border-bottom: 1px solid #eaeaea;
    }

    & .Picture {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      display: flex;
      flex-direction: column;
      align-items: center;

      & img {
        width: 70%;
        border-radius: 1em;
        scale: calc(1.4);
      }
    }

    & .Links {
      grid-column: 3 / 4;
      grid-row: 3 / 4;

      & h2 {
        padding-bottom: 1rem;
      }

      & li {
        padding: 0.2rem;
      }
    }
  }

  @media only screen and (max-width: 1170px) {
    .Parent2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6em 0 2em 0;

      & .Links {
        border-top: 1px solid #eaeaea;
      }

      & .Text,
      .Links,
      .Picture {
        width: 80%;
      }

      & .Picture {
        display: none;
      }
    }
  }
`;

const General = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Body ref={ref}>
      <div className="Parent1">
        <div className="PointerContainer">
          <FaHandPointDown className="Pointer" onClick={handleClick} />
        </div>

        <div className="Bubble"></div>
      </div>

      <div className="Parent2">
        <div className="Picture">
          <img src={Org}></img>
        </div>

        <div className="Text">
          <h1>Allmänt om ORG</h1>
          <div>
            <h2>Spelförening</h2>
            <p>
              ORG grundades år 2009 och har under en längre period endast
              bestått av ett fåtal medlemmar som haft kul tillsammans. Nu har vi
              valt att ta ORG till nästa nivå!
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
              Vi kommer att erhålla event och turneringar året om, framförallt
              när majoriteten av medlemmarna har det ledigt från jobb och
              studier.
            </p>
            <Link className="LinkPage">Mer om event!</Link>
          </div>
        </div>

        <div className="Links">
          <h2>Länkar</h2>
          <ul>
            <li>
              <Link className="LinkPage">Betalning</Link>
            </li>
            <li>
              <Link className="LinkPage">Betalning</Link>
            </li>
          </ul>
        </div>
      </div>
    </Body>
  );
};

export default General;
