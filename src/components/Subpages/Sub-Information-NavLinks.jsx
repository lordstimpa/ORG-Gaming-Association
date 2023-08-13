import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

// Link section
const Body = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;

  & .Links {
    margin-bottom: 2rem;

    & h2 {
      margin-bottom: 1rem;
    }

    & .LinkContainer {
      min-width: fit-content;

      & .MainLinkContainer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #00d1cd;

        & .MainLink {
          font-weight: 600;
          padding: 0.6rem;
        }

        & .Arrow {
          padding: 0.8rem;

          :hover {
            color: #00d1cd;
            cursor: pointer;
          }
        }

        & #Arrow1 {
          transform: ${(props) =>
            props.dropMenu1 ? "rotate(0)" : "rotate(-90deg)"};
        }

        & #Arrow2 {
          transform: ${(props) =>
            props.dropMenu2 ? "rotate(0)" : "rotate(-90deg)"};
        }
      }

      & .DropDownLinkContainer {
        display: flex;
        flex-direction: column;
        width: 100%;

        & .Link {
          padding: 0.6rem;
          width: auto;
        }
      }

      & .Link,
      .MainLink {
        text-decoration: none;
        color: #444444;
        width: fit-content;

        :hover {
          color: #00d1cd;
        }
      }

      & .active {
        color: #00d1cd;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }
`;

const NavLinks = () => {
  const [dropMenu1, setDropMenu1] = useState(false);
  const [dropMenu2, setDropMenu2] = useState(false);

  const handleDrop1 = () => {
    setDropMenu1(!dropMenu1);
  };

  const handleDrop2 = () => {
    setDropMenu2(!dropMenu2);
  };

  return (
    <Body dropMenu1={dropMenu1} dropMenu2={dropMenu2}>
      <div className="Links">
        <h2>Länkar</h2>

        <div className="LinkContainer">
          <div className="MainLinkContainer">
            <NavLink
              to={`/about`}
              className="MainLink"
              activeclassname="active"
            >
              Om ORG
            </NavLink>
            <AiOutlineDown
              className="Arrow"
              id="Arrow1"
              onClick={handleDrop1}
            />
          </div>

          {dropMenu1 && (
            <div className="DropDownLinkContainer">
              <NavLink
                to={`/about/history`}
                className="Link"
                activeclassname="active"
              >
                Historia
              </NavLink>

              <NavLink
                to={`/about/vision`}
                className="Link"
                activeclassname="active"
              >
                Vår vision
              </NavLink>

              <NavLink
                to={`/about/board`}
                className="Link"
                activeclassname="active"
              >
                Styrelse
              </NavLink>

              <NavLink
                to={`/about/statutes`}
                className="Link"
                activeclassname="active"
              >
                Stadgar
              </NavLink>

              <NavLink
                to={`/about/annual-reports`}
                className="Link"
                activeclassname="active"
              >
                Årsredovisningar
              </NavLink>
            </div>
          )}

          <div className="MainLinkContainer">
            <NavLink
              to={`/membership`}
              className="MainLink"
              activeclassname="active"
            >
              Medlemskap
            </NavLink>
            <AiOutlineDown
              className="Arrow"
              id="Arrow2"
              onClick={handleDrop2}
            />
          </div>

          {dropMenu2 && (
            <div className="DropDownLinkContainer">
              <NavLink
                to={`/membership/information`}
                className="Link"
                activeclassname="active"
              >
                Information
              </NavLink>

              <NavLink
                to={`/membership/become-member`}
                className="Link"
                activeclassname="active"
              >
                Bli Medlem
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Body>
  );
};

export default NavLinks;
