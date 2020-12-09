import React, { useRef, useState, useEffect} from "react"
import HeroContainer from "../components/Hero Components/Hero"
import HeroText from "../components/Hero Components/HeroText"
import Button from "../components/UI/Button"
import Avatar from '../components/Avatar'
import {motion, AnimatePresence} from 'framer-motion'
import Modal from '../components/UI/Modal'




const Home = () => {
  const [hideModal, showtheModal] = useState("0")
  const [opac, reveal] = useState("0")
  const textAreaRef = useRef(null);
  const ModalBackdrop = {
    visible: { scale:1, x: "0",},
    hidden: { scale:.8, x: "500px"}
}
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
      showtheModal("1");
      reveal(".3s ease-in-out");
  };  
    return (
      <>
        <HeroContainer bg={"#373939"} h={"100vh"}>
          <Modal bg={"#12C862"} vis={hideModal} showtheModal={showtheModal}whileHover={{ scale: 1.02 }}transi={opac}>
          Copied!
          </Modal>
          <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: .1 }}>
            <Avatar src="/profile_copy.jpg" initial={{scale:0}} animate={{scale:1}} transition={{ delay: .2 }} />
            <HeroText textAlign="center" Width="70%" MobileWidth="90%" initial={{opacity:0}} animate={{opacity:1}}>
              <h1>Hi I'm Pat Keenan <span>👋 </span></h1>
              <h3>A self-taught developer and real estate agent living in Asbury Park NJ</h3>
              <input
              ref={textAreaRef}
              value="patkeenan.dev@gmail.com"
              />
              <Button onClick={copyToClipboard} whileTap={{ scale: 0.9 }}>Copy Email</Button>
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
