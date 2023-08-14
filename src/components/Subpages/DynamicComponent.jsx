import styled from "styled-components";
import NavLinks from "./Sub-Information-NavLinks";
import Keyboard from "../../assets/gamer.jpg";

const Body = styled.div`
  min-height: 100svh;
  width: 100%;
  background: #eaeaea;
  color: #444444;
  display: grid;
  grid-template-columns: 1fr 175px 875px 1fr;
  grid-template-rows: 4rem fit-content(200px) auto 5em;

  // Title section
  & .Title {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    & h1 {
      text-align: center;
      font-size: 10vw;
      color: #f30067;
    }
  }

  // Info section
  & .Info {
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    height: fit-content;
    background: #eaeaea;
    padding: 2em;
    margin: 0 1rem;
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
    grid-template-rows: 4rem fit-content(100px) fit-content(100px) auto 5rem;

    & .Info {
      grid-column: 2 / 4;
      grid-row: 4 / 5;
      padding: 0;
      padding-top: 2rem;

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
    <Body image={Keyboard}>
      <NavLinks />
      {contentComponent}
    </Body>
  );
};

export default DynamicComponent;
