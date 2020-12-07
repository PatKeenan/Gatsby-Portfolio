import styled from'styled-components'
import {motion} from 'framer-motion'

const HeroContainer = styled(motion.div)`
    height:${props => props.h};
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align:center;
    align-items:center;
    background-color: ${props => props.bg};
    transition: .3s;
  `;

export default HeroContainer;
 