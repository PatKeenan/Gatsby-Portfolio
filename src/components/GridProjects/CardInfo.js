import styled from 'styled-components'
import {motion} from 'framer-motion'


const CardInfo = styled(motion.div)`
    padding:5px 0px;
    display:flex;
    flex-direction: column;
    width: calc(100% - 5px);
    p{
        color:white;
        text-align: center;
    }
    a{
        width:100%;
        margin: 5px;
    }
    div{
        display: flex;
    }

`
export default CardInfo;


