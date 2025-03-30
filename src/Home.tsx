import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";

const Home = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Navigation />

      <FadeIn>
        <div className="relative h-[calc(100vh-64px)]">
          <img
            src="/home.gif"
            alt="Background animation"
            className="w-full h-full object-cover border border-black bg-white opacity-70"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-light text-white tracking-widest">
              MEIYING MAIR
            </h1>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
