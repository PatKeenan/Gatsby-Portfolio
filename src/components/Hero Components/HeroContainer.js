import styled from'styled-components'
import {motion} from 'framer-motion'

const HeroContainer = styled(motion.div)`
    height:${props => props.h};
    width:100%;
    display:flex;
    overflow-x: hidden;
    text-align:center;
    background-color: ${props => props.bg};
    transition: .3s;
   
    @media only screen and (min-width: 600px) {
      text-align:center;
      align-items:center;

    }
  `;
export default HeroContainer;

