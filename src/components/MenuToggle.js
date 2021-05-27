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
    <button style={{cursor: 'pointer', background: "#fff", border: "1px solid #635bff", borderRadius: "6px"}} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#635bff" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#635bff" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
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
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "#635bff" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#635bff" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}