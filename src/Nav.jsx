import { Link } from "react-router-dom"
import styled from "styled-components"
import { AiOutlineDown } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";

const Body = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;

    & .NameContainer {
        width: 400px;
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

    & .LinksContainer {
        width: fit-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        & .Link {
            color: #fff;
            padding: 1em;
            transition: color 0.2s ease-in-out;

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
            visibility: hidden;
            display: flex;
            flex-direction: column;
            position: absolute;
            min-width: 200px;
            padding: 0.5em;
            margin-top: 1em;
            margin-left: 1em;
            backdrop-filter: blur(50px);
            border: 1px solid #d88200;
            border-radius: 0.5em;
            z-index: 9999;

            & .DropLink {
                color: #fff;
                text-decoration: none;
                padding: 0.5em 1em;
                display: block;
                border-radius: 1em;

                :hover {
                    color: #d88200;
                }
            }
        }

        & .DropLinkContainer:hover .DropContent, .DropLinkContainer:active .DropContent {
            visibility: visible;
        }
    }

    & .BurgerContainer {
        display: none;
        align-items: center;
        padding: 1em;

        & .HamburgerIcon {
            padding: 0.3em;
            color: #fff;
            border: 2px solid #d88200;
            border-radius: 50%;
            font-size: 2em;
            transition: color 0.2s ease-in-out;

            :hover {
                cursor: pointer;    
                color: #d88200;
            }
        }
    }

    & .Link {
        text-decoration: none;
    }

    @media only screen and (max-width: 1150px) {
        justify-content: space-between;

        .NameContainer {
            width: 150px;

            & .Org {
                font-size: 3em;
            }

            & p {
                display: none;
            }
        }

        .BurgerContainer {
            display: flex;
        }

        .LinksContainer {
            display: none;
        }
    }
`;

const Nav = () => {
    return ( 
        <Body>

            <div className="NameContainer">
                <Link to="/" className="Org">ORG</Link>
                <p>Original Pros Gaming</p>
            </div>

            <div className="BurgerContainer">
                <GiHamburgerMenu className="HamburgerIcon" />
            </div>

            <div className="LinksContainer">
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Medlemskap <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Information</Link>
                        <Link to="/" className="DropLink">Bli medlem!</Link>
                    </div>
                </div>
                <div className="DropLinkContainer">
                    <Link to="/" className="Link">Om ORG <AiOutlineDown className="Arrow" /></Link>
                    <div className="DropContent">
                        <Link to="/" className="DropLink">Historia</Link>
                        <Link to="/" className="DropLink">Vår vision</Link>
                        <Link to="/" className="DropLink">Styrelse</Link>
                        <Link to="/" className="DropLink">Stadgar</Link>
                        <Link to="/" className="DropLink">Årsredovisningar</Link>
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
                <Link to="/" className="Link">Kontakt</Link>
            </div>

        </Body>
     );
}

export default Nav;