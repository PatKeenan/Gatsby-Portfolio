import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const CardInfo = styled(motion.div)`
    padding:5px 0px;
    display:flex;
    width: calc(100% - 5px);
    button{
        width:100%;
        background-color:${props => props.primary ? "#20C9DB" : "white"};
        color:${props => props.primary ? "white" : "#20C9DB"};
        padding: 10px 20px;
        font-size:1em;
        font-family: "Roboto";
    } 
    button:hover{
        background-color:${props => props.primary ? "white" : "#20C9DB"};
        color:${props => props.primary ? "#20C9DB" : "white"};
    }
`
export default CardInfo;

