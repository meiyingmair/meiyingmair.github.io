import FadeIn from "./components/FadeIn";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <FadeIn>
      <Link
        to="about"
        className="h-full w-full items-center justify-center flex p-32 cursor-pointer"
      >
        <img src="/cat.jpg" alt="cat" />
      </Link>
    </FadeIn>
  );
};

export default Landing;
