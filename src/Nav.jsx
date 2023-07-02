import { Link } from "react-router-dom"
import styled from "styled-components"
import { AiOutlineDown } from "react-icons/ai"

const Body = styled.div`
    width: 100%;
    display: flex;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #d88200;

    & .Top {
        width: 25%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;

        & h1 {
            font-family: "Orbitron", Arial, Helvetica, sans-serif;
            text-align: center;
            color: #d88200;
            font-size: 2.5em;
            font-weight: 700;
        }

        & p {
            text-align: center;
            color: #fff;
            font-weight: 300;
        }
    }

    & .Bottom {
        width: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-weight: 400;

        & .Link {
            color: #fff;
            margin: 1em;
            transition: all 0.2s ease-in-out;

            & .Arrow {
                vertical-align: middle;
            }

            :hover {
                color: #d88200;
            }
        }
    }

    & .Link {
        text-decoration: none;
        color: #000;
    }
`;

const Nav = () => {
    return ( 
        <Body>
            <div className="Top">
                <Link to="/" className="Link"><h1>ORG</h1></Link>
                <p>Original Pros Gaming</p>
            </div>
            <div className="Bottom">
                <Link to="/" className="Link">Om oss <AiOutlineDown className="Arrow" /></Link>
                <Link to="/" className="Link">Gaming <AiOutlineDown className="Arrow" /></Link>
                <Link to="/" className="Link">Event <AiOutlineDown className="Arrow" /></Link>
                <Link to="/" className="Link">Community <AiOutlineDown className="Arrow" /></Link>
                <Link to="/" className="Link">Spelförening <AiOutlineDown className="Arrow" /></Link>
                <Link to="/" className="Link">Medlemskap</Link>
                <Link to="/" className="Link">Kontakt</Link>
            </div>
        </Body>
     );
}

export default Nav;