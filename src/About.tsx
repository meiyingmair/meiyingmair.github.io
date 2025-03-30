import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="max-w-3xl mx-auto p-8 flex gap-16 font-light">
          {/* Left Column */}
          <div className="w-64 flex flex-col">
            <img
              src="profile.JPG"
              alt="Profile"
              className="w-full mb-8 bg-white border border-black"
            />

            <h1 className="text-2xl tracking-wide mb-3 font-extralight">
              MEI-YING MAIR
            </h1>
            <div className="space-y-1.5 text-sm tracking-wide">
              <p className="font-light">
                <a href="mailto:madm426@gmail.com">madm426@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
