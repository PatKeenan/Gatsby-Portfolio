import React, { useRef, useState } from "react"
import HeroContainer from "../components/Hero Components/Hero"
import HeroText from "../components/Hero Components/HeroText"
import Button from "../components/UI/Button"
import Avatar from '../components/Avatar'
import {motion} from 'framer-motion'
import styled from 'styled-components'


const Home = () => {
  const textAreaRef = useRef(null);
  
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
  };

  return (
    <>
      <HeroContainer bg={"#373939"} h={"100vh"}>
          <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: .1 }}>
          <Avatar src="/profile_copy.jpg" initial={{scale:0}} animate={{scale:1}} transition={{ delay: .2 }} />
                <HeroText textAlign="center" Width="70%" MobileWidth="90%" initial={{opacity:0}} animate={{opacity:1}}>
                    <h1>Hi I'm Pat Keenan 👋 </h1>
                    <h3>A self-taught developer and real estate agent living in Asbury Park NJ</h3>
                    <input
                    ref={textAreaRef}
                    value="patkeenan.dev@gmail.com"
                    />
                    
                    <Button onClick={copyToClipboard}
                    whileTap={{ scale: 0.9 }} success={"test"}>Copy Email</Button>
                </HeroText>
                </motion.div>
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
