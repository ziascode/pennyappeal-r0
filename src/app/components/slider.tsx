import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const items = [
  { id: 1, title: "Provide Clean Water", image: "https://pennyappeal.ca/wp-content/uploads/2024/01/img4.jpg" },
  { id: 2, title: "Emergency Response", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/hands-praynew.jpg" },
  { id: 3, title: "Feed Families in Gaza", image: "https://via.placeholder.com/250" },
  { id: 4, title: "Sponsor an Orphan", image: "https://via.placeholder.com/250" },
  { id: 5, title: "Automate Your Ramadan", image: "https://via.placeholder.com/250" },
];

interface CardProps {
    image: string;
    title: string;
    onHover?: () => void;
    onLeave?: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ image, title, onHover, onLeave }) => (
    <div
      className="max-w-sm p-6 m-2 pt-60 min-w-[21vw] w-[100vw] border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-cover bg-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>
      <div className="relative z-10 flex flex-col">
        <div className="flex justify-end">
          <svg
            className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
          </svg>
        </div>
        <div className="min-h-20">
          <h5 className="max-w-48 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-wrap">
            {title}
          </h5>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">Test</p>
          <button className="py-3 px-5 bg-white rounded-full">Donate</button>
        </div>
      </div>
    </div>
  );
  
export default function Slider() {
  const controls = useAnimation();
  const x = useMotionValue(0); // Tracks position
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: ["0%", "-113%"],
        transition: { duration: 10, ease: "linear", repeat: Infinity }
      });
    };
  
    if (isHovered) {
      controls.stop();
    } else {
      startAnimation();
    }
  }, [isHovered, controls]);

  return (
    <div className="overflow-hidden w-full relative mx-auto">
      <motion.div
        className="flex"
        animate={controls}
        style={{ x }}
        ref={useRef(null)}
      >
        {[...items, ...items].map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            onHover={() => {
                setIsHovered(true);
                x.set(x.get()); // Save last position correctly
              }}
              
            onLeave={() => setIsHovered(false)}
          />
        ))}
      </motion.div>
    </div>
  );
}
