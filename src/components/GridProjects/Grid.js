import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Avatar from '../Avatar'
import { useStaticQuery, Link, graphql } from "gatsby"

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    padding-left:15px;
    padding-right:15px;
    padding-top:5px;
    padding-bottom:5px;
    gap: 0px 0px;
    margin-bottom:25px;
`

export default Grid ;