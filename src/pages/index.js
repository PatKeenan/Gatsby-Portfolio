import React, { useRef, useState} from "react"
import HeroContainer from "../components/Hero Components/HeroContainer"
import HeroText from "../components/Hero Components/HeroText"
import Button from "../components/UI/Button"
import Avatar from '../components/Avatar'
import Modal from '../components/UI/Modal'
import AnimationBlock from '../components/MotionDivs/AnimationBlock'
import Grid from "../components/GridProjects/Grid"
import Card from "../components/GridProjects/GridCard"
import CardInfo from "../components/GridProjects/CardInfo"
import { graphql } from 'gatsby';



const Home = ({data}) => {
  const projects = data.allMarkdownRemark.nodes   
  const [hideModal, showtheModal] = useState("0")
  const [opac, reveal] = useState("0")
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
      showtheModal("1");
      reveal(".3s ease-in-out");
  };  
    return (
      <>
        <HeroContainer h={"100vh"} bg={"none"}>
          <Modal bg={"#12C862"} vis={hideModal} showtheModal={showtheModal}whileHover={{ scale: 1.02 }}transi={opac}>
          Copied!
          </Modal>
          <AnimationBlock MarginMoveUp={"-40px"}>
            <Avatar src="/profile_copy.jpg" initial={{scale:0}} animate={{scale:1}} transition={{ delay: .2 }} whileTap={{ scale: 0.8 }} />
            <HeroText textAlign="center" Width="70%" MobileWidth="95%" textAlignMobile="center" initial={{opacity:0}} animate={{opacity:1}}>
              <h1>Hi I'm Pat Keenan <span role="img">👋 </span></h1>
              <h3>A self-taught developer and real estate agent living in Asbury Park NJ</h3>
              <input
              ref={textAreaRef}
              value="patkeenan.dev@gmail.com"
              />
              <Button onClick={copyToClipboard} whileTap={{ scale: 0.9 }} primary>Copy Email</Button>
            </HeroText>
          </AnimationBlock>
        </HeroContainer>
        <Grid>
          {projects.map(project => {
          const title = project.frontmatter.title 
          const desc = project.frontmatter.description
          return (
            <Card>
                <h3 style={{paddingBottom: "10px"}}>{title}</h3>
                <img src="https://source.unsplash.com/random" />
                <CardInfo>
                    <button primary>View Code</button>
                    <button>View Project</button>
                </CardInfo>
            </Card>
          )
        })}
        </Grid>
      </>
  )
}
export default Home;

export const pageQuery = graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            description
            codeLink
          }
        }
      }
    }
`