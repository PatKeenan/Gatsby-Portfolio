import React, {useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const ModalContainer = styled(motion.div)`
    background-color:${props => props.bg};
    position:fixed;
    display:flex;
    justify-content:center;
    opacity:${props => props.opac};
    transition:${props => props.transi};
    cursor:default;
    align-items:center;
    top:15px;
    right:15px;
    height:auto;
    width:auto;
    border-radius:8px;
    color:white;
    p{
        padding-left:20px;
    }
    p::after{
        padding-left:10px;
        content:"✓";
        color:white;
        padding-right:10px
    }
`



const Modal = ({children, bg, vis, showtheModal, transi}) => {
    useEffect(
        ()=>{ setTimeout(()=>{showtheModal("0")},3250)})
    return (  
                <ModalContainer opac={vis} bg={bg} transi={transi}>
                        <p>{children}</p>
                </ModalContainer>
  )
}
export default Modal;

