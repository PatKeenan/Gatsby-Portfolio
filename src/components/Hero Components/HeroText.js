import styled from'styled-components'
import {motion} from 'framer-motion'

const HeroText = styled(motion.div)`
      margin: 0 auto;
      *{ cursor:default;}
      text-align: ${props => props.textAlign};
      height:auto;
      width: ${props => props.Width};
      color: white;
      h1 {
        font-size:2.75em;
        color:light-gray;
        padding-top:10px;
      }
      h3{
        padding-top:10px;
        padding-bottom:5px;
        font-size:2em;
      }
      @media only screen and (max-width: 600px) {
        h1 {
        font-size:1.75em;
        }
        width: ${props => props.MobileWidth};
      }
      input{
        margin-top:20px;
        margin-bottom:25px;
        background-color:grey;
        padding:10px;
        width:350px;
        text-align:center;
        color:white;
        border:none;
        border-radius:10px;
        ::-moz-selection { background: none;}
        ::selection { background: none;}
        :focus { outline: none; }
        :hover{
          cursor:pointer;
        }
      }
  `;

export default HeroText;
