import styled from "styled-components";
import { Link } from "react-router-dom";

const Body = styled.div`
  position: absolute;
  right: 0;
  width: 15rem;
  background-color: #000;
  max-height: 91.5vh;
  z-index: 50;
  overflow-y: scroll;
  direction: rtl;
  border-bottom-left-radius: 1rem;

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #468b97;
    border-radius: 1rem;
  }

  & .Parent {
    direction: ltr;
  }

  & .Link {
    font-weight: 600;
    font-size: 1.5rem;
    color: #ef6262;
    text-decoration: none;
    width: fit-content;
    transition: color 0.2s ease-in-out;

    :hover {
      color: rgba(239, 98, 98, 0.5);
    }
  }

  & .DropLink {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.2s ease-in-out;

    :hover {
      color: #ef6262;
    }
  }

  & .Child {
    padding: 1rem;
    width: fit-content;
  }

  & .GrandChild {
    display: flex;
    flex-direction: column;
  }
`;

const NavMobile = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child">
          <Link to="/" className="Link">
            Medlemskap
          </Link>

          <div className="GrandChild">
            <Link to="/" className="DropLink">
              Information
            </Link>

            <Link to="/" className="DropLink">
              Bli medlem!
            </Link>
          </div>
        </div>

        <div className="Child">
          <Link to="/" className="Link">
            Om ORG
          </Link>

          <div className="GrandChild">
            <Link to="/" className="DropLink">
              Historia
            </Link>

            <Link to="/" className="DropLink">
              Vår vision
            </Link>

            <Link to="/" className="DropLink">
              Styrelse
            </Link>

            <Link to="/" className="DropLink">
              Stadgar
            </Link>

            <Link to="/" className="DropLink">
              Årsredovisningar
            </Link>
          </div>
        </div>

        <div className="Child">
          <Link to="/" className="Link">
            Gaming
          </Link>

          <div className="GrandChild">
            <Link to="/" className="DropLink">
              Counter Strike
            </Link>

            <Link to="/" className="DropLink">
              Rocket League
            </Link>
          </div>
        </div>

        <div className="Child">
          <Link to="/" className="Link">
            Event
          </Link>

          <div className="GrandChild">
            <Link to="/" className="DropLink">
              Kommande event
            </Link>

            <Link to="/" className="DropLink">
              Tidigare event
            </Link>
          </div>
        </div>

        <div className="Child">
          <Link to="/" className="Link">
            Gemenskap
          </Link>
        </div>

        <div className="Child">
          <Link to="/" className="Link">
            Kontakt
          </Link>
        </div>
      </div>
    </Body>
  );
};

export default NavMobile;
