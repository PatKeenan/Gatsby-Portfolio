import styled from 'styled-components'
import {motion} from 'framer-motion'

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    padding-left:15px;
    padding-right:15px;
    padding-top:5px;
    padding-bottom:5px;
    gap: 0px 0px;
    margin-bottom:25px;

    @media only screen and (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
        max-width: 1000px;
        margin: 0 auto;
        gap: 0px 10px;
    }
`

export default Grid;