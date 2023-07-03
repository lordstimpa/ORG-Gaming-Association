import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8em;

    & .InfoCont {
        border-radius: 2em;
        backdrop-filter: blur(50px);
        background: rgba(0,0,0,0.4);
        padding: 1.5em;
    }

    & .Title {
        font-family: "Orbitron", Arial, Helvetica, sans-serif;
        text-align: center;

        h1 {
            color: #d88200;
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
            border: 2px solid #d88200;
            padding: 0.5em 5em;
            text-decoration: none;
            transition: 0.2s ease-in-out;

            :hover {
                cursor: pointer;
                background: #d88200;
                transform: scale(1.1);
            }
        }
    }
`;

const Hero = () => {
  return (
    <Body>
        <div className="InfoCont">
            <div className="Title">
                <h1>Bli en del av ORG!</h1>
            </div>
            <div className="Text">
                <p>Vi är en spelförening som strävar efter att samla alla spelfantaster under en flagga!</p>
                <p>Bli medlem för att delta på event såsom LAN, turneringar och annat skoj.</p>
            </div>
            <div className="Medlem">
                <a href="https://ebas.sverok.se/blimedlem/25677">Bli medlem idag!</a>
            </div>
        </div>
    </Body>
    );
};

export default Hero;