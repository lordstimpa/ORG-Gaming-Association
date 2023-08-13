import styled from "styled-components";
import NavLinks from "./Sub-Information-NavLinks";

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #eaeaea;
  color: #444444;
  display: grid;
  grid-template-columns: 1fr 250px 850px 1fr;
  grid-template-rows: 5em fit-content(100px) auto 5em;

  // Title section
  & .Title {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    color: #00d1cd;
    border-bottom: 1px solid #00d1cd;
    margin-bottom: 2rem;
  }

  // Info section
  & .Info {
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    height: fit-content;
    background: #eaeaea;
    padding: 0 2em 2em 2em;
    border-radius: 1rem;

    // General styling
    & > div,
    div > div {
      padding-bottom: 1rem;
    }

    & h2 {
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
        justify-content: center;
        width: 40%;
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

  @media only screen and (max-width: 900px) {
    grid-template-rows: 5em fit-content(100px) fit-content(100px) auto 5em;

    & .Info {
      grid-column: 2 / 4;
      grid-row: 4 / 5;
      padding: 0;
      font-size: 75%;

      & .CardContainer {
        & .Card {
          margin: 0 0 2rem 0;
        }
      }
    }
  }

  @media only screen and (max-width: 680px) {
    & .Info {
      & .CardContainer {
        & .Card {
          width: 100%;
        }
      }
    }
  }
`;

const DynamicComponent = ({ contentComponent }) => {
  return (
    <Body>
      <img></img>
      <NavLinks />
      {contentComponent}
    </Body>
  );
};

export default DynamicComponent;
