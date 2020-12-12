import styled from 'styled-components'
import {motion} from 'framer-motion'



const Card = styled(motion.div)`
    display: flex; 
    max-width: 500px;
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
    :hover{ 
        background: rgba(255, 255, 255, 0.318);
    }
`

export default Card;
