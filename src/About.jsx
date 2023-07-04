import { useRef } from "react";
import styled from "styled-components"
import {FaHandPointDown} from "react-icons/fa"

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background: #d88200;

    & .Parent1 {
        display: flex;
        justify-content: center;

        & .PointerContainer {
        position: absolute;
        top: 91vh;
        z-index: 2;

        & .Pointer {
            font-size: 2em;
            color: #fff;
            padding: 0.2em;
            -webkit-animation: AnimatePointer 2s ease infinite;
            animation: AnimatePointer 2s ease infinite;
            transition: 0.1s ease-in-out;

            :hover {
                cursor: pointer;
                transform: scale(1.2);
            }
        }

        @-webkit-keyframes AnimatePointer {
            0% {margin-top: 0.5em;}
            50% {margin-top: 0em;}
            100%{margin-top: 0.5em;}
        }

        @keyframes AnimatePointer {
            0% {margin-top: 0.5em;}
            50% {margin-top: 0em;}
            100%{margin-top: 0.5em;}
        }
    }

        & .Bubble {
            position: absolute;
            top: 90vh;
            width: 300px;
            height: 300px;
            background: #d88200;
            border-radius: 50%;
            z-index: 1;
        }
    }
    
    & .Parent2 {
        z-index: 3;
    }
`;

const About = () => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return ( 
        <Body ref={ref}>
            <div className="Parent1">
                <div className="PointerContainer">
                    <FaHandPointDown className="Pointer" onClick={handleClick} />
                </div>

                <div className="Bubble">
                </div>
            </div>

            <div className="Parent2">
                <div>
                    <h1>Hello</h1> 
                </div>
            </div>
        </Body>
     );
}
 
export default About;