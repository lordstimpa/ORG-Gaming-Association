import styled from "styled-components";
import { Link } from "react-router-dom";

const Body = styled.div`
  position: absolute;
  right: 0;
  width: 15rem;
  background-color: #1a1a1b;
  max-height: 91.5vh;
  z-index: 50;
  overflow-y: scroll;
  direction: rtl;
  border-bottom-left-radius: 1rem;

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00d1cd;
    border-radius: 1rem;
  }

  & .Parent {
    direction: ltr;
  }

  & .Link {
    font-weight: 600;
    font-size: 1.5rem;
    color: #00d1cd;
    text-decoration: none;
    width: fit-content;
    transition: color 0.2s ease-in-out;

    :hover {
      color: #eaeaea;
    }
  }

  & .DropLink {
    color: #eaeaea;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.2s ease-in-out;

    :hover {
      color: #00d1cd;
    }
  }

  & .Child {
    padding: 1rem;
    width: fit-content;
  }

  & .Child:last-child {
    padding-bottom: 3rem;
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
          <Link to="/membership" className="Link">
            Medlemskap
          </Link>

          <div className="GrandChild">
            <Link to={`/membership/information`} className="DropLink">
              Information
            </Link>

            <Link to={`/membership/become-member`} className="DropLink">
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
