import styled from "styled-components";
import Gamer from "../assets/gamer.jpg";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Body = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .InfoCont {
    border-radius: 2em;
    backdrop-filter: blur(50px);
    background: rgba(0, 0, 0, 0.4);
    padding: 1.5em;
    margin: 1em;
  }

  & .Title {
    font-family: "Orbitron", Arial, Helvetica, sans-serif;
    text-align: center;

    h1 {
      color: #ef6262;
    }
  }

  & .Text {
    margin: 1em;

    p {
      color: #fff;
    }
  }

  & .Medlem {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    text-align: center;

    a {
      width: fit-content;
      color: #fff;
      background: #000;
      border-radius: 2em;
      border: 2px solid #ef6262;
      padding: 0.5em 5em;
      text-decoration: none;
      transition: 0.2s ease-in-out;

      :hover {
        cursor: pointer;
        background: #ef6262;
        transform: scale(1.1);
      }
    }
  }
`;

const Hero = () => {
  return (
    <Body>
      <Background image={Gamer} />

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
          <a href="https://ebas.sverok.se/blimedlem/25677">Bli medlem idag!</a>
        </div>
      </div>
    </Body>
  );
};

export default Hero;
