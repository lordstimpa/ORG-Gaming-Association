import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Org from "../assets/org.png";
import NavMobile from "./NavMobile";

const Body = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  background: ${(props) =>
    props.isScrolled || props.isClicked ? "rgb(0, 0, 0)" : "none"};
  z-index: 2;

  /* ORG logo and hamburger menu shown in the navbar */
  & .First {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    z-index: 1;
    justify-content: space-between;

    & .NameContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2rem;
      margin-top: ${(props) =>
        props.isScrolled || props.isClicked ? "0" : "2rem"};

      & .Org {
        z-index: 1;
        & img {
          width: ${(props) =>
            props.isScrolled || props.isClicked ? "80px" : "200px"};
          margin-top: ${(props) =>
            props.isScrolled || props.isClicked ? "1.5rem" : "10rem"};
          clip-path: ${(props) =>
            props.isScrolled || props.isClicked
              ? "inset(0 0 1.3rem 0)"
              : "inset(0 0 0 0)"};
        }
      }
    }
  }

  & .Second {
    z-index: 2;
  }

  /* Links shown in the navbar */
  & .LinksContainer {
    position: absolute;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    & .Link {
      color: #fff;
      padding: 1.3em;
      transition: color 0.2s ease-in-out;

      & .Arrow {
        vertical-align: middle;
      }

      :hover {
        color: #ef6262;
      }
    }

    & .DropLinkContainer {
      display: flex;
      flex-direction: column;
      position: relative;
      display: inline-block;
    }

    & .DropContent {
      visibility: hidden;
      display: flex;
      flex-direction: column;
      position: absolute;
      min-width: 200px;
      padding: 0.5em;
      margin-top: 1em;
      margin-left: 1em;
      backdrop-filter: blur(50px);
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #ef6262;
      border-radius: 0.5em;
      z-index: 9999;

      & .DropLink {
        color: #fff;
        text-decoration: none;
        padding: 0.5em 1em;
        display: block;
        border-radius: 1em;

        :hover {
          color: #ef6262;
        }
      }
    }

    & .DropLinkContainer:hover .DropContent,
    .DropLinkContainer:active .DropContent {
      visibility: visible;
    }
  }

  & .BurgerContainer {
    display: none;
    align-items: center;
    padding: 1em;

    & .HamburgerIcon {
      padding: 0.3em;
      color: #000;
      background: #ef6262;
      border-radius: 50%;
      font-size: 2em;
      transition: color 0.2s ease-in-out;

      :hover {
        cursor: pointer;
        color: #fff;
      }
    }
  }

  & .Link {
    text-decoration: none;
  }

  @media only screen and (max-width: 1170px) {
    .First {
      .NameContainer {
        margin-left: 1rem;
      }

      .BurgerContainer {
        display: flex;
      }

      .LinksContainer {
        display: none;
      }
    }

    @media only screen and (max-width: 800px) {
      .First {
        .NameContainer {
          & .Org {
            & img {
              width: ${(props) =>
                props.isScrolled || props.isClicked ? "80px" : "100px"};
              margin-top: ${(props) =>
                props.isScrolled || props.isClicked ? "1.5rem" : "3rem"};
            }
          }
        }
      }
    }
  }
`;

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 5;

      if (scrollPosition >= threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Body isScrolled={isScrolled} isClicked={isClicked}>
      <div className="First">
        <div className="NameContainer">
          <Link to="/" className="Org">
            <img src={Org}></img>
          </Link>
        </div>

        <div className="BurgerContainer" onClick={handleClick}>
          <GiHamburgerMenu className="HamburgerIcon" />
        </div>

        <div className="LinksContainer">
          <div className="DropLinkContainer">
            <Link to="/" className="Link">
              Medlemskap <AiOutlineDown className="Arrow" />
            </Link>
            <div className="DropContent">
              <Link to="/" className="DropLink">
                Information
              </Link>
              <Link to="/" className="DropLink">
                Bli medlem!
              </Link>
            </div>
          </div>
          <div className="DropLinkContainer">
            <Link to="/" className="Link">
              Om ORG <AiOutlineDown className="Arrow" />
            </Link>
            <div className="DropContent">
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
          <div className="DropLinkContainer">
            <Link to="/" className="Link">
              Gaming <AiOutlineDown className="Arrow" />
            </Link>
            <div className="DropContent">
              <Link to="/" className="DropLink">
                Counter Strike
              </Link>
              <Link to="/" className="DropLink">
                Rocket League
              </Link>
            </div>
          </div>
          <div className="DropLinkContainer">
            <Link to="/" className="Link">
              Event <AiOutlineDown className="Arrow" />
            </Link>
            <div className="DropContent">
              <Link to="/" className="DropLink">
                Kommande event
              </Link>
              <Link to="/" className="DropLink">
                Tidigare event
              </Link>
            </div>
          </div>
          <Link to="/" className="Link">
            Gemenskap
          </Link>
          <Link to="/" className="Link">
            Kontakt
          </Link>
        </div>
      </div>

      <div className="Second">{isClicked && <NavMobile />}</div>
    </Body>
  );
};

export default Nav;
