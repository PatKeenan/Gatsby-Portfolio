import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Avatar from '../Avatar'

const GridContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    padding-left:15px;
    padding-right:15px;
    padding-top:5px;
    padding-bottom:5px;
    gap: 0px 0px;
    margin-bottom:25px;
`
const Card = styled(motion.div)`
    display: flex; 
    flex-direction: column;
    margin: 10px auto;
    padding: 15px;
    border-radius: 10px;
    justify-content: center;
    height:auto;
    align-items:center;
    width: 90%;
    background: rgba(255, 255, 255, 0.218);
    img{
        width:97%;
        max-width: 500px;
        max-height: 350px;
        object-fit:cover;
        object-position:center;
        
    }
`
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
export default function Grid ({children}){
    return (
        <GridContainer>
            {children}
            <Card>
                <h3 style={{paddingBottom: "10px"}}>Project Title</h3>
                <img src="https://source.unsplash.com/random" />
                <CardInfo>
                    <button primary>View Code</button>
                    <button>View Project</button>
                </CardInfo>
            </Card>
        </GridContainer>
    )
};


