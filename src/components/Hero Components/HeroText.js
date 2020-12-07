import styled from'styled-components'
import {motion} from 'framer-motion'

const HeroText = styled(motion.div)`
      margin: 0 auto;
      text-align: ${props => props.textAlign};
      height:auto;
      width: ${props => props.Width};
      color: white;
      h1 {
        font-size:2.75em;
        color:light-gray;
      }
      h3{
        margin-top:0px !important;
        font-size:2em;
      }
      @media only screen and (max-width: 600px) {
        h1 {
        font-size:1.75em;
        }
        width: ${props => props.MobileWidth};
      }
      input{
        margin-bottom: 20px;
        background-color:grey;
        padding:10px 15px;
        width:350px;
        text-align:center;
        color:white;
        border:none;
        border-radius:10px;
        ::-moz-selection { background: #20C9DB; color:white; }
        ::selection { background: #20C9DB; color:white;}
        :focus { outline: none; }
        :hover{
          cursor:pointer;
        }
      }
      
  `;

export default HeroText;
