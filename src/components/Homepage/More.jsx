import styled from "styled-components";
import {
  PiComputerTower,
  PiUsersThree,
  PiGlobe,
  PiTrophy,
} from "react-icons/pi";

const Body = styled.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;

  & .Parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    & .Child {
      height: 250px;
      width: 250px;
      border-radius: 2rem;
      padding: 2rem;
      margin: 2rem;
      color: #eaeaea;
      backdrop-filter: blur(25px);
      background: rgba(0, 0, 0, 0.4);
      text-align: center;

      & h2 {
        color: #f30067;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        font-family: "Orbitron", Arial, Helvetica, sans-serif;
        border-bottom: 2px solid #f30067;
      }

      & p {
        font-size: 0.8rem;
        color: #eaeaea;
      }

      & .Icon {
        color: #eaeaea;
        font-size: 8rem;
      }
    }
  }

  @media only screen and (max-width: 1170px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .Parent {
      width: 90%;
    }
  }
`;

const More = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child">
          <div>
            <PiComputerTower className="Icon" />
            <h2>LAN</h2>
            <p>
              Delta på våra LAN-event där vi samlar alla våra medlemmar för en
              härlig träff med fokus på spel och roligheter!
            </p>
          </div>
        </div>
        <div className="Child">
          <div>
            <PiTrophy className="Icon" />
            <h2>Turneringar</h2>
            <p>
              Möt motståndare i en kamp om att vinna schyssta priser i en rad
              olika populära spel!
            </p>
          </div>
        </div>
        <div className="Child">
          <div>
            <PiGlobe className="Icon" />
            <h2>Online</h2>
            <p>
              Lira spel online via vår discord server och njut av långa svettiga
              nätter!
            </p>
          </div>
        </div>
        <div className="Child">
          <div>
            <PiUsersThree className="Icon" />
            <h2>Gemenskap</h2>
            <p>
              Lär känna nya spelintresserade nördar och få livslånga vänner!
            </p>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default More;
