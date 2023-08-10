import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #eaeaea;
  color: #444444;
  display: grid;
  grid-template-columns: 1fr 200px 900px 1fr;
  grid-template-rows: 5em fit-content(100px) auto 5em;

  & .Title {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    color: #00d1cd;
    border-bottom: 1px solid #00d1cd;
  }

  & .Links {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    background: #eaeaea;
    margin-top: 2em;
    border-radius: 1rem;

    & h2 {
      padding-bottom: 0.5rem;
    }

    & .LinkContainer {
      display: flex;
      flex-direction: column;

      & .Link,
      .MainLink {
        text-decoration: none;
        color: #444444;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        width: fit-content;

        :hover {
          color: #00d1cd;
        }
      }

      & .MainLink {
        padding: 0.5rem 0.5rem 0.5rem 0rem;
      }
    }
  }

  & .Info {
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    height: fit-content;
    background: #eaeaea;
    padding: 2em;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    // General styling
    & > div,
    div > div {
      padding-bottom: 1rem;
    }

    & h4 {
      padding: 0.5rem 0;
    }

    & p,
    h4 {
      padding: 0.2rem 1rem;
    }

    & ol {
      padding: 0.2rem 3.2rem;
    }

    // Board

    & .CardContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      & .Card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 385px;
        margin: 0 2rem 2rem 0;
        border-radius: 1rem;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        & img {
          width: 70%;
          border-radius: 100%;
          margin: 2rem 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto 20% 70% auto;
  }

  @media only screen and (max-width: 745px) {
    grid-template-rows: 5em fit-content(100px) auto fit-content(100px) 5em;

    & .Info {
      grid-column: 2 / 4;
    }

    & .Links {
      grid-column: 2 / 4;
      grid-row: 4 / 5;
    }
  }
`;

const AboutORG = ({ contentComponent }) => {
  return (
    <Body>
      <div className="Title">
        <h1>Om ORG</h1>
      </div>

      <div className="Links">
        <h2>Länkar</h2>

        <div className="LinkContainer">
          <Link to={`/about`} className="MainLink">
            Om ORG
          </Link>

          <Link to={`/about/history`} className="Link">
            Historia
          </Link>

          <Link to={`/about/vision`} className="Link">
            Vår vision
          </Link>

          <Link to={`/about/board`} className="Link">
            Styrelse
          </Link>

          <Link to={`/about/statutes`} className="Link">
            Stadgar
          </Link>

          <Link to={`/about/annual-reports`} className="Link">
            Årsredovisningar
          </Link>
        </div>
      </div>

      <div className="Info">
        {contentComponent ? (
          contentComponent
        ) : (
          <div>
            <div>
              <h2>Original Pros Spelförening</h2>
            </div>
            <div>
              <p>
                Original Pros Spelförening är föreningen för dig som har ett
                genuint intresse för e-sport och andra tävlingsinriktade spel.
              </p>
              <p>
                Vi är för närvarade en grupp på 5-10 personer i 25-års åldern
                och spelar framför allt Counter-Strike i syfte att ha roligt och
                utvecklas, men även andra typer av spel förekommer (till exempel
                strategi- och racingspel). En större del av gruppen utövar även
                Rocket League regelbundet i syfte att bli bättre och ha roligt
                längs vägen.
              </p>
            </div>
            <div>
              <p>
                Föreningen kommer anordna spelsessioner framför allt på kvällar
                och helger för att det ska passa så många som möjligt. Vi har
                ambitionen att anordna olika typer av evenemang för medlemmarna,
                såsom online-turneringar och LAN-partyn.
              </p>
            </div>
            <div>
              <p>
                Vi startade som en Steam-grupp redan 2009, med rötter i Fagersta
                i Västmanland, och har spelat tillsammans sedan dess men vill nu
                få med fler härliga själar på ORG-tåget.
              </p>
            </div>
            <div>
              <h4>- Styrelsen</h4>
            </div>
          </div>
        )}
      </div>
    </Body>
  );
};

export default AboutORG;
