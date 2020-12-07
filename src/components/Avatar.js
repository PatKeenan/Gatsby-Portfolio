import styled from'styled-components'

const Avatar = styled.img`
      vertical-align: middle;
      border-radius: 50%;
      object-fit: cover;
      width: 400px;
      height: 400px;
      transition: ease-in-out .5s;
      animation: pulse 2s infinite;
      @keyframes pulse {
        0% {
          
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }

        20% {
          
          box-shadow: inset 0 0 0 20px rgba(255, 255, 255, 0.104);
        }
        40% {
          
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        80% {
          
          box-shadow: inset 0 0 0 20px rgba(255, 255, 255, 0.104);
        }

        100% {
        
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
      }      
      :hover{
        /*border: 20px solid blue;*/
        cursor: pointer;
        z-index:20;
        transition: ease-in-out .3s;
      }  
      @media only screen and (max-width: 600px){
      width: 200px;
      height: 200px;
      }  
  `;
  


export default Avatar;
