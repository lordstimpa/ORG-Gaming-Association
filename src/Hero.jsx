import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    margin-top: 4em;
    display: flex;
    justify-content: center;

    & .InfoCont {

    }

    & .Title {
        font-family: "Orbitron", Arial, Helvetica, sans-serif;
        text-align: center;
        margin: 1em;

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
        display: flex;
        justify-content: center;
        text-align: center;

        p {
            width: fit-content;
            color: #fff; 
            background: #000;
            border-radius: 2em;
            border: 2px solid #d88200;
            padding: 0.5em 5em;
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
                <h1>Vi är ORG!</h1>
            </div>
            <div className="Text">
                <p>Vi är en spelförening som strävar efter att samla alla spelfantaster under en flagga!</p>
            </div>
            <div className="Medlem">
                <p>Bli medlem idag!</p>
            </div>
        </div>
    </Body>
    );
};

export default Hero;