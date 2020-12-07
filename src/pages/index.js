import React from "react"
import HeroContainer from "../components/Hero Components/Hero"
import HeroText from "../components/Hero Components/HeroText"
import Button from "../components/UI/Button"
import Avatar from '../components/Avatar'

 

const Home = () => {
  return (
    <>
    <HeroContainer bg={"#4E6A6D"} h={"100vh"}>
      <Avatar src="/profile_copy.jpg" />
            <HeroText textAlign="center" Width="70%" MobileWidth="90%">
                <h1>Hi I'm Pat Keenan! I'm a self-taught developer and real estate agent living in Asbury Park NJ</h1>
                <p>This is my Portfolio website</p>
                <Button><span>This is A button</span></Button>
            </HeroText>
      </HeroContainer>
      <HeroContainer bg={"#20C9DB"} h={"100vh"}>
            <HeroText textAlign="left" Width="30%" MobileWidth="90%">
                <h1>Hi I'm Pat Keenan! I'm a self-taught developer and real estate agent living in Asbury Park NJ</h1>
                <p>This is my Portfolio website</p>
                <Button primary><a>Test</a></Button>
            </HeroText>
      </HeroContainer>
      </>
  )
}
export default Home;