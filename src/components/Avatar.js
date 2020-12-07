import styled from'styled-components'
import {motion} from 'framer-motion'

const Avatar = styled(motion.img)`
      vertical-align: middle;
      border-radius: 50%;
      object-fit: cover;
      width: 300px;
      height: 300px;  
      @media only screen and (max-width: 600px){
      width: 200px;
      height: 200px;
      }  
  `;
  
export default Avatar;
