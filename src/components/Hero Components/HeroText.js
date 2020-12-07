import styled from'styled-components'

const HeroText = styled.div`
      margin: 0 auto;
      text-align: ${props => props.textAlign};
      padding:20px;
      width: ${props => props.Width};
      color: white;
      h1 {
        font-size:2.75em;
        color:light-gray;
      }
      @media only screen and (max-width: 600px) {
        h1 {
        font-size:1.75em;
        }
        width: ${props => props.MobileWidth};
      }
  `;

export default HeroText;
