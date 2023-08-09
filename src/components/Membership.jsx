import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #272829;
  color: #fff;
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
    background: #00000057;
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
        color: #fff;
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
    background: #00000057;
    padding: 1em;
    border-radius: 1rem;

    & p {
      padding: 0.2rem;
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

const Membership = ({ contentComponent }) => {
  return (
    <Body>
      <div className="Title">
        <h1>Medlemskap</h1>
      </div>

      <div className="Path"></div>

      <div className="Links">
        <h3>Links</h3>

        <div className="LinkContainer">
          <Link to={`/membership/information`} className="Link">
            Information
          </Link>

          <Link to={`/membership/become-member`} className="Link">
            Bli Medlem
          </Link>
        </div>
      </div>

      <div className="Info">{contentComponent}</div>
    </Body>
  );
};

export default Membership;
