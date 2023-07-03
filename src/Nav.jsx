import { Link } from "react-router-dom"
import styled from "styled-components"
import { AiOutlineDown } from "react-icons/ai"

const Body = styled.div`
    width: 100%;
    display: flex;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #d88200;
    background: rgba(0,0,0,0.85);

    & .Name {
        width: 25%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .Org {
            font-family: "Orbitron", Arial, Helvetica, sans-serif;
            font-size: 2.5em;
            font-weight: 700;
            text-decoration: none;
            color: #d88200;
            width: fit-content;
        }

        & p {
            color: #fff;
            font-weight: 300;
        }
    }

    & .Links {
        width: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-weight: 400;

        & .Link {
            color: #fff;
            padding: 1em;
            transition: all 0.2s ease-in-out;

            & .Arrow {
                vertical-align: middle;
            }

            :hover {
                color: #d88200;
            }
        }

        & .DropLinkContainer {
            display: flex;
            flex-direction: column;
            position: relative;
            display: inline-block;
        }

        & .DropContent {
            display: none;
            flex-direction: column;
            position: absolute;
            min-width: 200px;
            padding: 0.5em;
            margin-top: 1em;
            margin-left: 1em;
            background: #000;
            border: 1px solid #d88200;

            & .DropLink {
                color: #fff;
                text-decoration: none;
                padding: 0.5em 1em;
                display: block;

                :hover {
                    color: #d88200;
                }
            }
        }

        & .DropLinkContainer:hover .DropContent {
            display: flex;
        }
    }

    & .Link {
        text-decoration: none;
    }

    @media only screen and (max-width: 1150px) {
        .Top {
            background: red;
        }
    }
`;

const Nav = () => {
    return ( 
        <Body>
            <div className="Name">
                <Link to="/" className="Org">ORG</Link>
                <p>Original Pros Gaming</p>
            </div>
            <div className="Links">
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Om oss <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Historia</Link>
                        <Link to="/" className="DropLink">Vår vision</Link>
                    </div>
                </div>
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Gaming <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Counter Strike</Link>
                        <Link to="/" className="DropLink">Rocket League</Link>
                    </div>
                </div>
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Event <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Kommande event</Link>
                        <Link to="/" className="DropLink">Tidigare event</Link>
                    </div>
                </div>
                <Link to="/" className="Link">Community</Link>
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Spelförening <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Styrelse</Link>
                        <Link to="/" className="DropLink">Stadgar</Link>
                        <Link to="/" className="DropLink">Årsredovisningar</Link>
                    </div>
                </div>
                <Link to="/" className="Link">Medlemskap</Link>
                <Link to="/" className="Link">Kontakt</Link>
            </div>
        </Body>
     );
}

export default Nav;