import React from 'react'
import {Link} from 'gatsby'
import HeroContainer from "../components/Hero Components/HeroContainer"
import HeroText from "../components/Hero Components/HeroText"
import Button from "../components/UI/Button"
import AnimationBlock from '../components/MotionDivs/AnimationBlock'

export default function PageNotFound (){
    return(
        <HeroContainer h={"100vh"}>
            <AnimationBlock>
            <HeroText textAlign="center" Width="70%" MobileWidth="95%" textAlignMobile="center" initial={{opacity:0}} animate={{opacity:1}}>
            <h1 style={{marginBottom: "15px"}}>Looks like your lost!</h1>
            <Link to="/" className={"ERRORPAGE"}><Button>View Home Page</Button></Link>
            </HeroText>
            </AnimationBlock>
        </HeroContainer>
    )
}









 