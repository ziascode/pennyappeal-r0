"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Link from "next/link";

const items = [
  { id: 1, title: "Give Clean Water", place: "Sudan, Somalia, Afghanistan, Kenya +", target: "https://donate.pennyappeal.ca/program/thirst-relief/", image: "https://pennyappeal.ca/wp-content/uploads/2025/02/w3new.jpg" },
  { id: 3, title: "Automate Your Ramadan", place: "Earn daily ajr", target: "", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/hands-praynew.jpg" },
  { id: 4, title: "Gaza Emergency Response", place: "Gaza, Palestine", target: "https://pennyappeal.ca/project/gaza-emergency-response/", image: "https://pennyappeal.ca/wp-content/uploads/2024/09/1ynew.jpg" },
  { id: 2, title: "Sponsor an Orphan", place: "Palestine, Pakistan", target: "https://donate.pennyappeal.ca/program/orphankind/", image: "https://pennyappeal.ca/wp-content/uploads/2024/01/img4.jpg" },
  { id: 5, title: "Volunteer Opportunities", place: "Get involved at Penny Appeal Canada", target: "https://pennyappeal.ca/about/team-orange/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/fow9new.jpg" },
];

interface CardProps {
  image: string;
  title: string;
  place: string;
  target: string;
  onHover?: () => void;
  onLeave?: () => void;
}

const Card: React.FC<CardProps> = ({ image, place, title, target, onHover, onLeave }) => (
  <div
    className="max-w-sm p-7 mx-2 my-5 pt-60 min-w-[21vw] w-[100vw] border-gray-200 rounded-xl shadow-none shadow-slate-50 dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-cover bg-center transition-all duration-300 hover:shadow-xl hover:shadow-[0px_0px_0px_5px_#ffffff] hover:scale-[103%]"
    style={{ backgroundImage: `url(${image})` }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>
    <div className="relative z-10 flex flex-col">
      <h5 className="max-w-48 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">{place}</p>
      <Link href={target} target="_blank" rel="noopener noreferrer">
        <button className="py-3 px-5 bg-white rounded-full">Donate</button>
      </Link>
    </div>
  </div>
);

export default function SliderTwo({ className }: { className?: string }) {
  const controls = useAnimation();
  const translateX = useMotionValue(0);
  const speed = 40; // px per second (adjust for smoothness)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: "-100%",
        transition: {
          ease: "linear",
          duration: (items.length * 200) / speed, // Adjust for smooth looping
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop(); // Pause exactly where it is
    }
  }, [isHovered, controls]);

  return (
    <div className={`${className} overflow-hidden w-full relative mx-auto`}>
      <motion.div
        className="flex flex-none pr-20"
        animate={controls}
        style={{ x: translateX }}
      >
        {[...items, ...items].map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            place={item.place}
            target={item.target}
            onHover={() => setIsHovered(true)}
            onLeave={() => setIsHovered(false)}
          />
        ))}
      </motion.div>
    </div>
  );
}
