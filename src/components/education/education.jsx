import { useRef } from "react";
import "./education.scss";
import { motion, useInView } from "framer-motion";
const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
const Education = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
  
    return (
        <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      // ref={ref}
      // animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I belive in consistent learning
          <br /> and growing.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>MY</motion.b> Education
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>UG @</motion.b>
          </h1>
          <button>NIT Trichy</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black"}}
        >
          <h2>Class X</h2>
          <p>
            I have compeleted my high school from BPS Public School, Etah. It comes under Central Board of Secondary Education.
          </p>
          <button>98.6%</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Class XII</h2>
          <p>
          I have compeleted my intermediate from St. Paul's Sr. Sec. School, Etah. It comes under Central Board of Secondary Education.
          </p>
          <button>97.2%</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>BTECH - NIT Trichy</h2>
          <p>
            I am currently pursuing my bachelor's degree from National Institute Of Technology, Tiruchirappalli. I have my majors in Chemical Engineering and my minors in Computer Science and Enginnering.
          </p>
          <button>8.8/10</button>
        </motion.div>
      </motion.div>
    </motion.div>
    )
}

export default Education