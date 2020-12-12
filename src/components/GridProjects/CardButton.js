import styled from 'styled-components'
import {motion} from 'framer-motion'


const CardButton = styled(motion.button)`
    *{
        margin: 5px;
    }
        width:inherit;
        background:${props => props.primary ? "#20C9DB" : "none"};
        color:${props => props.primary ? "white" : "white"};
        border:${props => props.primary ? "1px solid #20C9DB" : "1px solid #20C9DB" };
        padding: 10px 20px;
        font-size:1em;
        font-family: "Roboto";
        cursor: pointer;
    
    :hover{
        background:${props => props.primary ? "white" : "white"};
        border:${props => props.primary ? "1px solid white" : "1px solid white"};
        color:${props => props.primary ? "#20C9DB" : "#20C9DB"};
        cursor: pointer;
    }
    :focus { outline: none; }
`
export default CardButton;