import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { render } from 'react-dom'

const FadingDiv = styled(motion.div)`
    height:100vh;
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:${props => props.MarginMoveUp};
`

const AnimationBlock = ({children, MarginMoveUp}) => {

    return (
        <FadingDiv initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: .4 }} MarginMoveUp={MarginMoveUp}>
            {children}
        </FadingDiv>
    )
}
export default AnimationBlock;