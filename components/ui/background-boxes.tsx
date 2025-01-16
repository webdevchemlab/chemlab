"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundBoxes = () => {
  const [isClient, setIsClient] = useState(false);
  const rows = new Array(20).fill(1);
  const cols = new Array(20).fill(1);
  
  const colors = [
    "rgb(125 211 252)", // sky-300
    "rgb(249 168 212)", // pink-300
    "rgb(134 239 172)", // green-300
    "rgb(253 186 116)", // orange-300
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const baseStyles = "absolute inset-0 flex flex-wrap opacity-40 transform-gpu";
  const skewStyles = "-skew-y-6 scale-150";

  if (!isClient) {
    return (
      <div className={`${baseStyles} ${skewStyles}`} style={{ width: "150%", left: "-25%" }}>
        {rows.map((_, i) => (
          <div key={`row` + i} className="w-8 h-8 border-l border-slate-700 relative">
            {cols.map((_, j) => (
              <div
                key={`col` + j}
                className="w-8 h-8 border-r border-t border-slate-700 relative"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${skewStyles}`} style={{ width: "150%", left: "-25%" }}>
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-8 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0.1 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-8 h-8 border-r border-t border-slate-700 relative"
            >
              {Math.random() > 0.95 && isClient && (
                <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                  +
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundBoxes;