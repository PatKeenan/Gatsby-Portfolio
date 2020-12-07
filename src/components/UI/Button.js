import styled from'styled-components'

const Button = styled.button`
      padding: 10px 20px;
      border-radius:20px;
      font-size:18px;
      font-weight:700;
      border: none;
      background: ${props => props.primary ? "palevioletred" : "white"};
      color: ${props => props.primary ? "white" : "palevioletred"};
      :hover{
        background-color: ${props => props.primary ? "white" : "palevioletred"};
        color: ${props => props.primary ? "palevioletred" : "white"};
        cursor:pointer;
      }

      
  `;

  export default Button;