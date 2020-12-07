import styled from'styled-components'
import {motion} from 'framer-motion'

const Button = styled(motion.button)`
      display: flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      margin: 0 auto;
      padding: 10px 20px;
      border-radius:20px;
      font-size:18px;
      font-weight:700;
      border: none;
      background: ${props => props.primary ? "white" : "#20C9DB"};
      color: ${props => props.primary ? "#20C9DB" : "white"};
      :hover{
        background-color: ${props => props.primary ? "#20C9DB" : "white"};
        color: ${props => props.primary ? "white" : "#20C9DB"};
        cursor:pointer;
      }
      :focus { outline: none; }
      
  `;

  export default Button;