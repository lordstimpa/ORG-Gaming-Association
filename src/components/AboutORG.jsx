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

  & > div {
    margin: 0.5rem;
  }

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
    padding: 1em;
    border-radius: 1rem;

    & h3 {
      padding-bottom: 0.5rem;
    }

    & .LinkContainer {
      display: flex;
      flex-direction: column;

      & .Link {
        text-decoration: none;
        color: #444444;
        margin: 0.5rem;
        width: fit-content;

        :hover {
          color: #00d1cd;
        }
      }
    }
  }

  & .Info {
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    background: #eaeaea;
    padding: 2em;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    & > div {
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
        <h3>Links</h3>

        <div className="LinkContainer">
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

      <div className="Info">{contentComponent}</div>
    </Body>
  );
};

export default AboutORG;
