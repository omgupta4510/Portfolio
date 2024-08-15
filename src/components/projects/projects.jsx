import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Estate Website",
    img: "/realEstate.png",
    desc: "An application for real estate transactions. It has an interactive and responsive front-end using React.js. Implemented secure user authentication with JWT and bcrypt for password encryption. Developed a robust back-end with Node and Express. Created RESTful APIs to facilitate seamless data exchange with MongoDB. Ensured best practices in code optimization and responsive design for a high-performance user experience.",
  },
  {
    id: 2,
    title: "AI Chat Bot",
    img: "/chatBot.png",
    desc: "This project is a full-featured AI chatbot, developed using the MERN stack. The chatbot is equipped with a secure user authentication system, allowing users to create accounts and log in. Additionally, it integrates OpenAI's GPT-3 APIs, making it capable of handling a variety of user queries and tasks. This project demonstrates the integration of advanced conversational AI with modern web development practice.",
  },
  {
    id: 3,
    title: "Chat App",
    img: "/chatApp.png",
    desc: "It is a feature-rich chat application utilizing the MERN stack, showcasing advanced one-on-one and group messaging capabilities. It utilizes Socket.IO to implement real-time messaging functionalities. Designed and developed an intuitive user interface using Chakra UI",
  },
  {
    id: 4,
    title: "Voting App",
    img: "/voting.png",
    desc: "Developed robust desktop-based application to efficiently manage student, faculty, and other critical information within the university. It is a Java based project that utilises Java Swing and AWT. The user interface ensures a seamless experience for adding, viewing, and updating information. The project's technical backbone lies in its integration with a centralized MySQL database, providing a secure and scalable solution.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;