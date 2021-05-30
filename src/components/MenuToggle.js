import { motion } from "framer-motion";
import React from "react";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="2"
    stroke="blue"
    {...props}
  />
);

const transition = { duration: 0.25 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <button style={{cursor: 'pointer', background: "rgb(246 252 254)", border: "none"}} onClick={toggle}>
      <svg width="30" height="30" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 5 L 20 5", stroke: "#635bff" },
            open: { d: "M 3 18.8 L 17 5", stroke: "#635bff" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 11.9 L 20 11.9"
          stroke="#635bff"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 18.8 L 20 18.8", stroke: "#635bff" },
            open: { d: "M 3 5 L 17 18.8", stroke: "#635bff" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}