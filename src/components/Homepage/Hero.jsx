import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import Gamer from "../../assets/gamer.jpg";
import Counter from "../../assets/keyboard.jpg";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Body = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .InfoCont {
    border-radius: 2em;
    backdrop-filter: blur(25px);
    background: rgba(0, 0, 0, 0.4);
    padding: 2rem;
    margin: 1rem;
  }

  & .Title {
    text-align: center;

    h1 {
      color: #f30067;
    }
  }

  & .Text {
    margin: 1em;
    text-align: center;

    p {
      color: #eaeaea;
    }
  }

  & .Medlem {
    display: flex;
    justify-content: center;
    text-align: center;

    a {
      width: fit-content;
      color: #eaeaea;
      border-radius: 2em;
      border: 2px solid #f30067;
      padding: 0.5em 5em;
      text-decoration: none;
      transition: 0.2s ease-in-out;

      :hover {
        cursor: pointer;
        background: #f30067;
        transform: scale(1.1);
      }
    }
  }

  & .PointerContainer {
    position: absolute;
    bottom: 0;
    margin: 2rem;

    & .Pointer {
      color: #eaeaea;
      font-size: 1.5rem;
      padding: 0.6rem;
      border: 2px solid #f30067;
      border-radius: 50%;
      transition: 0.2s ease-in-out;

      :hover {
        cursor: pointer;
        background: #f30067;
        transform: scale(1.1);
      }
    }
  }

  @media only screen and (max-width: 900px) {
    & .InfoCont {
      padding: 1em;
      margin: 1em;
    }
    & .Title {
      font-size: 0.8rem;
    }
    & .Text > p {
      font-size: 0.8rem;
    }
    & .Medlem > a {
      font-size: 0.8rem;
    }
  }
`;

const Hero = () => {
  // Click
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = window.innerHeight;
  const backgroundImage = scrollPosition >= scrollThreshold ? Counter : Gamer;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Body ref={ref}>
      <Background backgroundImg={backgroundImage} />

      <div className="InfoCont">
        <div className="Title">
          <h1>Bli en del av ORG!</h1>
        </div>
        <div className="Text">
          <p>
            Vi är en spelförening som strävar efter att samla alla spelfantaster
            under en flagga!
          </p>
          <p>
            Bli medlem för att delta på event såsom LAN, turneringar och annat
            skoj.
          </p>
        </div>
        <div className="Medlem">
          <a href="https://ebas.sverok.se/blimedlem/25677">Bli medlem nu!</a>
        </div>
      </div>

      <div className="PointerContainer">
        <SlArrowDown className="Pointer" onClick={handleClick} />
      </div>
    </Body>
  );
};

export default Hero;
