import styled from "styled-components";
import NavLinks from "./Sub-NavLinks";
import PostDate from "./Sub-PostDate";
import Keyboard from "../../assets/gamer.jpg";

const Body = styled.div`
  min-height: 100svh;
  width: 100%;
  background: #eaeaea;
  color: #444444;
  display: grid;
  grid-template-columns: 1fr 175px 875px 175px 1fr;
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

    // Member
    & .Medlem {
      display: flex;
      justify-content: center;
      text-align: center;

      a {
        width: fit-content;
        color: #f30067;
        border-radius: 2em;
        border: 2px solid #f30067;
        padding: 0.5em 5em;
        text-decoration: none;
        transition: 0.2s ease-in-out;

        :hover {
          cursor: pointer;
          transform: scale(1.05);
          color: #eaeaea;
          background: #f30067;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 45px;
        }
      }
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

    // Event
    & .EventContainer {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 1rem;
      text-align: center;
      border-radius: 2rem;
      border: 3px solid #f30067;
      overflow: hidden;
      transition: all 0.2s ease-in-out;

      & .TextContainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        width: 100%;
        background: #eaeaead6;
        padding: 1rem;

        & h2 {
          color: #f30067;
          font-size: 2rem;
        }

        & p {
          color: #444444;
        }
      }

      & img {
      }

      :hover {
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 45px;
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
      <PostDate />
    </Body>
  );
};

export default DynamicComponent;
