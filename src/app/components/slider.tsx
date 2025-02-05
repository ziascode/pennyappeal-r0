import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Link from "next/link";

const items = [
  { id: 1, title: "Provide Clean Water", place: "Sudan, Somalia, Afghanistan, Kenya +", target: "https://donate.pennyappeal.ca/program/thirst-relief/", image: "https://pennyappeal.ca/wp-content/uploads/2025/02/w3new.jpg" },
  { id: 3, title: "Automate Your Ramadan", place: "Earn daily ajr", target: "", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/hands-praynew.jpg" },
  { id: 4, title: "Gaza Emergency Response", place: "Gaza, Palestine", target: "https://pennyappeal.ca/project/gaza-emergency-response/", image: "https://pennyappeal.ca/wp-content/uploads/2024/09/1ynew.jpg" },
  { id: 2, title: "Sponsor an Orphan", place: "Palestine, Pakistan", target: "https://donate.pennyappeal.ca/program/orphankind/", image: "https://pennyappeal.ca/wp-content/uploads/2024/01/img4.jpg" },
  { id: 5, title: "Donate Your Zakat", place: "100% Zakat Policy", target: "https://pennyappeal.ca/about/team-orange/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/fow9new.jpg" },
  { id: 6, title: "Volunteer Opportunities", place: "Get involved at Penny Appeal Canada", target: "https://pennyappeal.ca/about/team-orange/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/volunteer4.jpg" },
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
   className="max-w-sm p-7 mx-2 my-5 pt-60 min-w-[21vw] w-[100vw] border-gray-200 rounded-xl shadow-none shadow-slate-50 dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-cover bg-center transition-all duration-300 hover:shadow-xl hover:shadow-[0px_0px_0px_5px_#fdfeff] hover:scale-[103%]"
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
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">{place}</p>
        <Link href={`${target}`} target="_blank" rel="noopener noreferrer"><button className="py-3 px-5 bg-white rounded-full">Donate</button></Link>
      </div>
    </div>
  </div>
);

export default function Slider({ className }: { className?: string }) {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const lastX = useRef(0);
  const lastVelocity = useRef(0);
  const totalDistance = -3130; 

useEffect(() => {
  const startAnimation = (fromX: number, velocity: number = 0) => {
    const baseDuration = 25;
    const remainingDistance = totalDistance - fromX;
    const adjustedDuration = (remainingDistance / totalDistance) * baseDuration;

    controls.start({
      x: [fromX, totalDistance],
      transition: { 
        duration: adjustedDuration, 
        ease: "linear", 
        repeat: Infinity, 
        velocity: velocity || undefined, // Maintain momentum
      },
    });
  };

  if (isHovered) {
    lastX.current = x.get();
    lastVelocity.current = x.getVelocity();
    controls.stop();
  } else {
    startAnimation(lastX.current, lastVelocity.current);
  }
}, [isHovered, controls, x, totalDistance]); // ✅ Added totalDistance


  return (
    <div className={`${className} overflow-hidden w-full relative mx-auto`}>
      <motion.div
        className="flex"
        animate={controls}
        style={{ x }}
        ref={useRef(null)}
      >
        {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            place={item.place}
            target={item.target}
            onHover={() => {
              setIsHovered(true);
              x.set(x.get());
            }}
            onLeave={() => setIsHovered(false)}
          />
        ))}
      </motion.div>
    </div>
  );
}
