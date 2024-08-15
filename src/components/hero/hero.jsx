import { motion } from "framer-motion";
import "./hero.scss";
const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };
  
const Hero = () => {
  return (
    <div className="hero">
    <div className="wrapper">
      <motion.div
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>OM GUPTA</motion.h2>
        <motion.h1 variants={textVariants}>
          Developer and Programmer
        </motion.h1>
        <motion.div variants={textVariants}  className="buttons" style={{ zIndex: 100 }}>
        <a href="#Projects">
          <motion.button variants={textVariants} >
            See the Latest Works
          </motion.button>
        </a>
        <a href="https://drive.google.com/file/d/1V5MSqA_6hwFT5H_rSCMTFE3Dh3W_EaJ1/view?usp=sharing">
          <motion.button  variants={textVariants}>Download CV</motion.button>
        </a>
        
                 
        </motion.div>
        <motion.img
          variants={textVariants}
          animate="scrollButton"
          src="scroll.png"
          alt=""
        />
      </motion.div>
    </div>
    <motion.div
      className="slidingTextContainer"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      
    >
      DEVELOPER
    </motion.div>
    <div className="imageContainer">
      <img src="hero.png" alt="" />
    </div>
  </div>
  )
}

export default Hero

