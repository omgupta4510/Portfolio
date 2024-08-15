import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Om Gupta
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/omgupta4510/">
            <img src="linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_om_gupta_4510/">
            <img src="instagram.png" alt="" />
          </a>
          <a href="https://github.com/omgupta4510">
            <img src="github.png" alt="" />
          </a>
          <a href="om_gupta_4510">
            <img src="discord.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;