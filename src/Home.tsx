import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";
import { motion, useAnimation } from "framer-motion";

// Interface for Letter component props
interface LetterProps {
  letter: string;
  index: number;
}

// Interactive Letter component for text animation
const Letter = ({ letter, index }: LetterProps) => {
  const controls = useAnimation();

  return (
    <motion.span
      className="inline-block cursor-pointer"
      whileHover={{
        scale: 1.2,
        rotate: Math.random() * 10 - 5,
        color: "#000",
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
        },
      }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => {
        controls.start({
          scale: 1.2,
          transition: { duration: 0.2 },
        });
      }}
      onMouseLeave={() => {
        controls.start({
          scale: 1,
          transition: { duration: 0.2 },
        });
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const Home = () => {
  // Split name into individual letters for letter animation
  const name = "MEI-YING MAIR";
  const letters = name.split("");

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navigation />

      <FadeIn>
        <div className="relative h-[calc(100vh-64px)]">
          {/* Background Image - With top portion cut off */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="w-full h-[calc(100%+80px)] -mt-20">
              <img
                src="/home_background.jpg"
                alt="Background"
                className="w-full h-full object-cover object-top opacity-80"
              />
            </div>
          </div>

          {/* Interactive name with letter animation */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-6xl font-light tracking-widest text-gray-800 bg-white/30 px-8 py-4">
              {letters.map((letter, index) => (
                <Letter key={index} letter={letter} index={index} />
              ))}
            </h1>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
