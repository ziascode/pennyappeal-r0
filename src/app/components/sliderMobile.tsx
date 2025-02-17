import { motion} from "framer-motion";
import Link from "next/link";

const items = [
  { id: 1, title: "Give Clean Water", target:"https://donate.pennyappeal.ca/program/thirst-relief/", image: "https://pennyappeal.ca/wp-content/uploads/2025/02/w3new.jpg" },
  { id: 3, title: "Automate Your Ramadan",  target:"https://pennyappeal.ca/auto-give/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/hands-praynew.jpg" },
  { id: 4, title: "Gaza Emergency Response", target: "https://pennyappeal.ca/project/gaza-emergency-response/", image: "https://pennyappeal.ca/wp-content/uploads/2024/09/1ynew.jpg" },
  { id: 2, title: "Sponsor an Orphan", target:"https://donate.pennyappeal.ca/program/orphankind/", image: "https://pennyappeal.ca/wp-content/uploads/2024/01/img4.jpg" },
  { id: 5, title: "Donate Your Zakat", target: "https://pennyappeal.ca/program/zakat/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/fow9new.jpg" },
  { id: 6, title: "Volunteer With Us",  target: "https://pennyappeal.ca/about/team-orange/", image: "https://pennyappeal.ca/wp-content/uploads/2024/03/volunteer4.jpg" },
];

interface CardProps {
    image: string;
    title: string;
    target: string;
  }
  
  const Card: React.FC<CardProps> = ({ image, title, target }) => (
    <Link href={target} target="_blank" rel="noopener noreferrer" >
      <div
        className="max-w-sm p-7 mx-2 my-3 pt-20 min-w-[21vw] w-[45vw] h-[200px]  rounded-xl shadow-none  dark:bg-gray-800 dark:border-gray-700 opacity-95 relative bg-cover bg-center transition-all duration-300 shadow-[0px_0px_18px_-8px_#05386b]  hover:shadow-xl hover:shadow-[0px_0px_0px_5px_#ffffff] hover:scale-[103%]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-gray-900 to-transparent opacity-90 rounded-b-xl z-0"></div>
  
        {/* Make this div take full height */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          <div className="flex justify-end">
            {/* Optional SVG */}
          </div>
  
          {/* Title container with a fixed height */}
          <div className="flex-grow flex items-end">
            <h5 className="text-2xl font-semibold tracking-tight text-gray-50 text-wrap text-center leading-tight min-h-[3rem]">
              {title}
            </h5>
          </div>
  
        </div>
      </div>
    </Link>
  );
  

  
  
export default function SliderMobile({ className }: { className?: string }) {
  return (
    <div className={`${className} overflow-hidden w-full relative mx-auto`}>
      <motion.div
        className="flex flex-wrap justify-center"
      >
        {[...items].map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            target={item.target}
          />
        ))}
      </motion.div>
    </div>
  );
}
