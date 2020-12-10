import styled from'styled-components'
import {motion} from 'framer-motion'

const HeroText = styled(motion.div)`
      margin: 0 auto;
      *{ cursor:default;
      }
      text-align: ${props => props.textAlignMobile};
      height:auto;
      width: ${props => props.MobileWidth};
      color: rgb(241, 241, 241);
      h1 {
        font-size:1.75em;
        padding-top:10px;
        }
      h3{
          padding-top:10px;
          padding-bottom:5px;
          font-size:1.2em;
          color:rgb(241, 241, 241);
        }
      input{
        margin-top:20px;
        margin-bottom:25px;
        background-color:grey;
        padding:10px;
        width: ${props => props.Width};
        max-width: 500px !important;
        text-align: ${props => props.textAlign};
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


      @media only screen and (min-width: 600px) {
        max-width: 800px;
        input{
          max-width: 500px;

        }
        h1 {
          font-size:2.75em;
          color:light-gray;
          padding-top:20px;
    
          
        }
        h3{
          padding-top:10px;
          padding-bottom:5px;
          font-size:1.75em;
          font-weight:300;
          max-width:700px;
          margin:0 auto;
   
        }
      }
      
  `;

export default HeroText;
